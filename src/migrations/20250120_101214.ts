import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "users" ALTER COLUMN "id" SET DATA TYPE serial;
  ALTER TABLE "users" ALTER COLUMN "id" DROP DEFAULT;
  ALTER TABLE "tags" ALTER COLUMN "id" SET DATA TYPE serial;
  ALTER TABLE "tags" ALTER COLUMN "id" DROP DEFAULT;
  ALTER TABLE "products" ALTER COLUMN "id" SET DATA TYPE serial;
  ALTER TABLE "products" ALTER COLUMN "id" DROP DEFAULT;
  ALTER TABLE "products_rels" ALTER COLUMN "parent_id" SET DATA TYPE integer;
  ALTER TABLE "products_rels" ALTER COLUMN "tags_id" SET DATA TYPE integer;
  ALTER TABLE "payload_locked_documents" ALTER COLUMN "id" SET DATA TYPE serial;
  ALTER TABLE "payload_locked_documents" ALTER COLUMN "id" DROP DEFAULT;
  ALTER TABLE "payload_locked_documents_rels" ALTER COLUMN "parent_id" SET DATA TYPE integer;
  ALTER TABLE "payload_locked_documents_rels" ALTER COLUMN "users_id" SET DATA TYPE integer;
  ALTER TABLE "payload_locked_documents_rels" ALTER COLUMN "tags_id" SET DATA TYPE integer;
  ALTER TABLE "payload_locked_documents_rels" ALTER COLUMN "products_id" SET DATA TYPE integer;
  ALTER TABLE "payload_preferences" ALTER COLUMN "id" SET DATA TYPE serial;
  ALTER TABLE "payload_preferences" ALTER COLUMN "id" DROP DEFAULT;
  ALTER TABLE "payload_preferences_rels" ALTER COLUMN "parent_id" SET DATA TYPE integer;
  ALTER TABLE "payload_preferences_rels" ALTER COLUMN "users_id" SET DATA TYPE integer;
  ALTER TABLE "payload_migrations" ALTER COLUMN "id" SET DATA TYPE serial;
  ALTER TABLE "payload_migrations" ALTER COLUMN "id" DROP DEFAULT;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "users" ALTER COLUMN "id" SET DATA TYPE uuid;
  ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
  ALTER TABLE "tags" ALTER COLUMN "id" SET DATA TYPE uuid;
  ALTER TABLE "tags" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
  ALTER TABLE "products" ALTER COLUMN "id" SET DATA TYPE uuid;
  ALTER TABLE "products" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
  ALTER TABLE "products_rels" ALTER COLUMN "parent_id" SET DATA TYPE uuid;
  ALTER TABLE "products_rels" ALTER COLUMN "tags_id" SET DATA TYPE uuid;
  ALTER TABLE "payload_locked_documents" ALTER COLUMN "id" SET DATA TYPE uuid;
  ALTER TABLE "payload_locked_documents" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
  ALTER TABLE "payload_locked_documents_rels" ALTER COLUMN "parent_id" SET DATA TYPE uuid;
  ALTER TABLE "payload_locked_documents_rels" ALTER COLUMN "users_id" SET DATA TYPE uuid;
  ALTER TABLE "payload_locked_documents_rels" ALTER COLUMN "tags_id" SET DATA TYPE uuid;
  ALTER TABLE "payload_locked_documents_rels" ALTER COLUMN "products_id" SET DATA TYPE uuid;
  ALTER TABLE "payload_preferences" ALTER COLUMN "id" SET DATA TYPE uuid;
  ALTER TABLE "payload_preferences" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
  ALTER TABLE "payload_preferences_rels" ALTER COLUMN "parent_id" SET DATA TYPE uuid;
  ALTER TABLE "payload_preferences_rels" ALTER COLUMN "users_id" SET DATA TYPE uuid;
  ALTER TABLE "payload_migrations" ALTER COLUMN "id" SET DATA TYPE uuid;
  ALTER TABLE "payload_migrations" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();`)
}
