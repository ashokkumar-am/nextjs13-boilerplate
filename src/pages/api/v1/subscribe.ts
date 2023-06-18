import pool from '@/config/dbConfig';
import { NextApiRequest, NextApiResponse } from 'next';


interface SubscribeRequestBody {
  email: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email }: SubscribeRequestBody = req.body;

    try {
      const query = 'INSERT INTO subscribers (email) VALUES (?)';
      await pool.query(query, [email]);

      res.status(200).json({ message: 'Subscription successful!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
