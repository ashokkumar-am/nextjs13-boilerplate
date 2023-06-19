import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'newpassword',
  database: 'nextjs13',
});

export default pool;
