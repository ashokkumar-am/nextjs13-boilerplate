import mysql, { Pool, PoolConfig } from 'mysql';

const poolConfig: PoolConfig = {
    host: 'your_host',
    user: 'your_user',
    password: 'your_password',
    database: 'your_database',
    connectionLimit: 10,
  };
  
  const pool: Pool = mysql.createPool(poolConfig);
  
  export default pool;
  
