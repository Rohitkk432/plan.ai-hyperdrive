import { NextApiRequest, NextApiResponse } from "next";
import axios from "@/lib/axiosClient";
import { redirect } from "next/navigation";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let token: any;
    if (req.query.code) {
        await axios
            .post("https://github.com/login/oauth/access_token", {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code: req.query.code,
                redirect_uri: "http://localhost:3000/create-task",
            })
            .then((res) => {
                token = res.data.split("&")[0].replace("access_token=", "");
                // axios.post(`http://localhost:3000/api/oauth/callback?token=${token}`);
            });
    }
}
