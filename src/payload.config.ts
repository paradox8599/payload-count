import { sqliteAdapter } from '@payloadcms/db-sqlite'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Tags } from './collections/tags'
import { Products } from './collections/products'
import { getPayload as originGetPayload } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const config = buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    components: {
      beforeDashboard: [{ path: '@/seed-button' }],
    },
  },
  collections: [Users, Tags, Products],
  secret: '3a857c00d56f1c82da83e268',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({ client: { url: 'file:./repro.db' } }),
  plugins: [],
})

export default config

export const getPayload = async () => await originGetPayload({ config: config })
