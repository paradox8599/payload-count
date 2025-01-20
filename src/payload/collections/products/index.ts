import { randomUUID } from 'crypto';
import type { CollectionConfig } from 'payload';

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    components: {
      Description: '@/payload/collections/products/desc',
    },
  },
  access: {},
  fields: [
    {
      name: 'name',
      type: 'text',
      hooks: {
        beforeChange: [({ data }) => data?.name ?? randomUUID()],
      },
    },

    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
    },
  ],
};
