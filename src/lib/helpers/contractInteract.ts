import { contractAddresses } from "@/config/addresses";
import { SkillStaking, IDL } from "@/types/idl/skill_staking";
import { Program, AnchorProvider, web3, Wallet, Idl, BN } from "@project-serum/anchor";
import { clusterApiUrl, Keypair, PublicKey, Transaction, ComputeBudgetProgram, sendAndConfirmTransaction } from "@solana/web3.js";
import * as mpl from "@metaplex-foundation/mpl-token-metadata";
import { Metaplex, keypairIdentity, bundlrStorage, compareAmounts, walletAdapterIdentity } from "@metaplex-foundation/js";
import { Signer, Connection } from "./wallet";
import { fetchTokenMetadata, uploadFileToIPFS, uploadMetadataToIPFS } from "./metadata";
import {
    ASSOCIATED_TOKEN_PROGRAM_ID,
    createAssociatedTokenAccount,
    createAssociatedTokenAccountInstruction,
    createInitializeMintInstruction,
    createMintToCheckedInstruction,
    getAssociatedTokenAddress,
    MintLayout,
    TOKEN_PROGRAM_ID,
} from "@solana/spl-token";

import axios from "@/lib/axiosClient";

//change
const nameRouterAccount = new PublicKey("DjZBVW36M4pGRJ3F3iDPaCYyGzbUAfDUD43Wx42MQvgF");
const routerCreator = new PublicKey("55kBY9yxqSC42boV8PywT2gqGzgLi5MPAtifNRgPNezF");
const TOKEN_METADATA_PROGRAM_ID = new PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");

export const getProvider = async (connection: web3.Connection, signerWallet: any) => {
    const provider = new AnchorProvider(connection, signerWallet, {});
    return provider;
};

export const getPlanProgram = async (provider: AnchorProvider) => {
    const program: Program<SkillStaking> = new Program(IDL, contractAddresses.skill_staking, provider);
    return program;
};

export const solAirdrop = async (address: PublicKey) => {
    return new Promise<any>(async (resolve, reject) => {
        const provider = await getProvider(Connection, Signer);
        provider.connection
            .requestAirdrop(address, 2 * web3.LAMPORTS_PER_SOL)
            .then((res) => {
                resolve(res);
            })
            .catch((e) => {
                reject(e);
            });
    });
};

export const get_pda_from_seeds = async (seeds: any, program: any) => {
    return await web3.PublicKey.findProgramAddressSync(seeds, program.programId);
};

async function get_metadata_account(mintKeypair: any) {
    return (await web3.PublicKey.findProgramAddressSync([Buffer.from("metadata"), TOKEN_METADATA_PROGRAM_ID.toBuffer(), mintKeypair.toBuffer()], TOKEN_METADATA_PROGRAM_ID))[0];
}

export const createBounty = (bountyCreator: PublicKey, tokenAmount: number, metadataLink: string, bountyTitle: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            const provider = await getProvider(Connection, Signer);
            const metaplex = await Metaplex.make(Connection);
            const program = await getPlanProgram(provider);

            const indexHash = new Date().toString().slice(0, 5);

            const mintKeypair = new PublicKey("9zwS7yKVckeL8Udu1ezWNZG5Dt6vTDVhQBXMsSNYJweM");
            const bountyCreatorTokenAccount = await getAssociatedTokenAddress(mintKeypair, Signer.publicKey);
            const [bounty] = await get_pda_from_seeds([Buffer.from("bounty"), bountyCreator.toBuffer(), Buffer.from(indexHash)], program);
            const bountyTokenAddress = await getAssociatedTokenAddress(mintKeypair, bounty, true);
            let tokenMetadata = await fetchTokenMetadata("9zwS7yKVckeL8Udu1ezWNZG5Dt6vTDVhQBXMsSNYJweM");
            const tokenRoundAmount = tokenAmount * 10 ** tokenMetadata.decimals;

            await program.methods
                .createBounty(indexHash, new BN(tokenRoundAmount), metadataLink, [], null)
                .accounts({
                    bountyCreator: bountyCreator,
                    bountyCreatorTokenAccount: bountyCreatorTokenAccount,
                    bountyAccount: bounty,
                    bountyTokenAccount: bountyTokenAddress,
                    systemProgram: web3.SystemProgram.programId,
                    tokenProgram: TOKEN_PROGRAM_ID,
                    usdcMint: mintKeypair,
                    associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
                })
                .rpc({ skipPreflight: false, maxRetries: 3 })
                .then((res) => {
                    resolve(res);
                })
                .catch((e) => {
                    reject(e);
                });
        } catch (e) {
            reject(e);
        }
    });
};
