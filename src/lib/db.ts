// lib/db.ts
import { Pool } from 'pg';

let pool: Pool | null = null;

export function getPool(): Pool {
  if (!pool) {
    console.log('Creating new database pool connection');
    try {
      const connectionString = process.env.DATABASE_URL;
      console.log('Connection string available:', !!connectionString);
      
      pool = new Pool({
        connectionString,
        ssl: {
          rejectUnauthorized: false,
        },
        max: 10,
        idleTimeoutMillis: 2000,
      });
      
      // Add error event handler
      pool.on('error', (err) => {
        console.error('Unexpected error on idle client', err);
        pool = null;
      });
      
    } catch (error) {
      console.error('Error creating database pool:', error);
      throw error;
    }
  }
  return pool;
}