import { randomUUID } from 'crypto';
import type { CollectionConfig } from 'payload';

export const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {},
  access: {},
  fields: [
    {
      name: 'name',
      type: 'text',
      hooks: {
        beforeChange: [({ data }) => data?.name ?? randomUUID()],
      },
    },
  ],
};
