import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/config/dbConfig';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;
        try {
            console.log("Submit Form Testing")
            const connection = await db.getConnection();
            await connection.query(
                'INSERT INTO enquiries (name, email, message) VALUES (?, ?, ?)',
                [name, email, message]
            );
            console.log('req body conection', connection.query)
            res.status(200).json({ message: 'Form submitted successfully!' });
            connection.release();
        } catch (error) {
            res.status(500).json({ message: 'An error occurred while submitting the form.' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
