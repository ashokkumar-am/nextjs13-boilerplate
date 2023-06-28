import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/config/dbConfig';

interface SubscribeRequestBody {
    email: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            res.status(200).json("Newsletter GET testing");

            break;
        case 'POST':
            // res.status(200).json({ response: "Newsletter POST page testing" });
            {
                const { email }: SubscribeRequestBody = req.body;

                try {
                    const query = 'INSERT INTO subscribers (email) VALUES (?)';
                    await db.query(query, [email]);

                    res.status(200).json({ message: 'Subscription successful!' });
                } catch (error) {
                    console.error(error);
                    res.status(500).json({ message: 'Internal server error' });
                }
            }
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"])
            res.status(405).end
    }
}
