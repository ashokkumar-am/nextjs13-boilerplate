import pool from '@/config/dbConfig';
import { NextApiRequest, NextApiResponse } from 'next';

interface SubscriptionStatusResponse {
    subscribed: boolean;
}

export default async function handler(_: NextApiRequest, res: NextApiResponse<SubscriptionStatusResponse>) {
    if (_.method === 'GET') {
        try {
            const query = 'SELECT COUNT(*) AS count FROM subscribers';
            const results = await pool.query(query);

            const subscribed = results[0].count > 0;

            res.status(200).json({ subscribed });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
