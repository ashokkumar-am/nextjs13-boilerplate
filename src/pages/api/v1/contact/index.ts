import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/config/dbConfig';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            // res.status(200).json("contact page testing")
            try {
                const query = "Select * from enquiries";
                const values: any[] = [];
                const [data] = await db.execute(query, values);
                db.end();
                res.status(200).json({ allenquiries: data })
            } catch (error) {
                console.log("Error", error);
                res.status(500).json({ message: "Server Error" })
            }
            break;
        case 'POST':
            // res.status(200).json({ response: "POST contact page testing" })
            const { name, email, message } = req.body;
            try {
                console.log("Submit Form Testing")
                const connection = await db.getConnection();
                await connection.query(
                    'INSERT INTO enquiries (name, email, message) VALUES (?, ?, ?)',
                    [name, email, message]
                );
                console.log('req body conection', connection.query)
                connection.release();
                res.status(200).json({ message: 'Form submitted successfully!' });
            } catch (error) {
                res.status(500).json({ message: 'An error occurred while submitting the form.' });
            }
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"])
            res.status(405).end
    }
}
