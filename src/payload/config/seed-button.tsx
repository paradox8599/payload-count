import { Button } from '@payloadcms/ui';
import { seed } from './init';
import Link from 'next/link';

export default async function SeedButton() {
  return (
    <div className="flex items-center gap-20">
      <Button
        onClick={async () => {
          'use server';
          await seed();
        }}
      >
        Seed
      </Button>

      <Link href="/admin/collections/products?limit=10&page=1&where%5Bor%5D%5B0%5D%5Band%5D%5B0%5D%5Btags%5D%5Bin%5D%5B0%5D=1&where%5Bor%5D%5B0%5D%5Band%5D%5B0%5D%5Btags%5D%5Bin%5D%5B1%5D=2">
        See Filter
      </Link>
    </div>
  );
}
