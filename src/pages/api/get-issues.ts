import { NextApiRequest, NextApiResponse } from "next";
import axios from "@/lib/axiosClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.status(405).send({ message: "Only POST requests allowed" });
        return;
    }

    const { access_token } = req.body;

    await axios("https://rohit-kodam.atlassian.net/rest/api/3/search", {
        method: "GET",
        headers: {
            Authorization: `Basic ${access_token}`,
        },
    })
        .then((response) => {
            res.status(200).send(response.data);
        })
        .catch((error) => {
            res.status(400).send({ message: error.message });
        });
}
