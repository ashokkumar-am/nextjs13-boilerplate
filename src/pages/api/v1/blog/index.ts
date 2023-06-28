import { NextApiRequest, NextApiResponse } from 'next';
// import db from '@/config/dbConfig';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            res.status(200).json("Blog page testing")
            break;
        case 'POST':
            res.status(200).json({ response: "Blog POST page testing" })
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"])
            res.status(405).end
    }
}
