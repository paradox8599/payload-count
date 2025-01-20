import path from 'path';
import { fileURLToPath } from 'url';
import { buildConfig, getPayload as originalGetPayload } from 'payload';

import { sqlite } from './payload/config/database';

import { Users } from './payload/collections/users';
import { Tags } from './payload/collections/tags';
import { Products } from './payload/collections/products';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const payloadConfig = buildConfig({
  typescript: { outputFile: path.resolve(dirname, 'payload.d.ts') },
  secret: process.env.PAYLOAD_SECRET || 'xxxxxxxxxxxxxxxxxxxxxxxx',
  onInit: async (payload) => {
    await payload.db.deleteMany({ collection: 'users', where: {} });
    await payload.create({
      collection: 'users',
      data: { email: 'admin@me.com', password: 'admin@me.com' },
    });
  },

  db: sqlite,

  collections: [Users, Tags, Products],

  admin: {
    components: {
      beforeDashboard: [{ path: '@/payload/config/seed-button' }],
    },
    importMap: { baseDir: path.resolve(dirname) },
    autoLogin: {
      email: 'admin@me.com',
      password: 'admin@me.com',
      username: 'admin@me.com',
    },
  },
});

export async function getPayload() {
  return await originalGetPayload({ config: payloadConfig });
}

export default payloadConfig;
