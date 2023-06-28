import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'newpassword',
  database: 'nextjs13',
});

export default connection;
