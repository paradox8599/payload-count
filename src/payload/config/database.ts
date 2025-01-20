import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres';
import { sqliteAdapter } from '@payloadcms/db-sqlite';

export const db = vercelPostgresAdapter({
  idType: 'uuid',
  transactionOptions: { isolationLevel: undefined },
  pool: { connectionString: process.env.DATABASE_URI || undefined },
});

export const sqlite = sqliteAdapter({
  client: {
    url: 'file:./sqlite.db',
  },
});
