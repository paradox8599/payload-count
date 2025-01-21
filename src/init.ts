import { randomInt } from 'crypto'
import { getPayload } from './payload.config'

export async function seed() {
  const payload = await getPayload()

  await payload.db.deleteMany({ collection: 'products', where: {} })
  await payload.db.deleteMany({ collection: 'tags', where: {} })

  const tags = [
    await payload.create({
      collection: 'tags',
      data: { name: 'tag-1' },
    }),
    await payload.create({
      collection: 'tags',
      data: { name: 'tag-2' },
    }),
  ]
  for (let i = 1; i <= 10; i++) {
    const hasTwoTags = randomInt(2) === 0
    const connectTags = hasTwoTags ? tags : [tags[0]]

    await payload.create({
      collection: 'products',
      data: {
        name: `product-${i}`,
        tags: connectTags,
      },
    })
  }
}
