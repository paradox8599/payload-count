# Reproducing filter counting issue

# Reproducing Steps

- no `.env` required
- run `dev` command
- click `Seed` button on dashboard page to generate sample data.
- click `See Filter` link on dashboard page to see where the issue happens.

## Other info

- it happens on both `sqlite` and `postgres`
- tried on `bun` and `pnpm`
- note: when using `payload.count()` and `payload.find()`, same thing happens to their `totalDocs`
