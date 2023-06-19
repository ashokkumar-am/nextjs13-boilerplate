import { NextApiRequest, NextApiResponse } from 'next';
// import { pool } from 'mysql2/promise';
import Joi from 'joi';
import pool from '@/config/dbConfig';

interface ContactFormData {
  name: string;
  email: string;
  mobile : string;
  message: string;
}

interface ApiResponse {
  message: string;
}

const contactFormSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  mobile: Joi.string().required(),
  message: Joi.string().required(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {

    console.log('Contact API Called')
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { name, email, mobile, message }: ContactFormData = req.body;
  console.log('req.boyd', req.body)

  // Validate the contact form data
  const { error } = contactFormSchema.validate({ name, email, mobile, message });

  if (error) {
    res.status(400).json({ message: error.details[0].message });
    return;
  }

//   const pool: Pool = // Create or import your MySQL connection pool here

  try {
    const connection = await pool.getConnection();
    console.log('Connection Calling');
    await connection.query(
      'INSERT INTO contacts (name, email, mobile, message) VALUES (?, ?, ?, ?)',
      [name, email, mobile, message]
    );
    res.status(200).json({ message: 'Contact form submitted successfully' });
    connection.release();
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
