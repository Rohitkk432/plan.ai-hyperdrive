import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import AtlassianProvider from "next-auth/providers/atlassian";

export default NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
            authorization: {
                params: {
                    // I wish to request additional permission scopes.
                    scope: "repo read:user user:email notifications",
                    code: process.env.NEXTAUTH_SECRET,
                },
            },
        }),
        AtlassianProvider({
            clientId: process.env.ATLASSIAN_CLIENT_ID || "",
            clientSecret: process.env.ATLASSIAN_CLIENT_SECRET || "",
            authorization: {
                params: {
                    scope: "write:jira-work read:jira-work read:jira-user offline_access read:me",
                },
            },
        }),
        // Add other providers here
        // Add other providers here
    ],
    callbacks: {
        async jwt({ token, account, user }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.accessToken = account.access_token;
                token.uid = user?.id;
                token.provider = account.provider;
            }
            return token;
        },
        async session({ session, token }) {
            // Send properties to the client, like an access_token from a provider.
            (session as any).accessToken = token.accessToken;
            (session as any).provider = token.provider;
            (session as any).user.id = token.uid;
            return session;
        },
    },
});
