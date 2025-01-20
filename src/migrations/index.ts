import * as migration_20250120_093402 from './20250120_093402';

export const migrations = [
  {
    up: migration_20250120_093402.up,
    down: migration_20250120_093402.down,
    name: '20250120_093402'
  },
];
