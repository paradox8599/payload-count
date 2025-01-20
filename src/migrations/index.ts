import * as migration_20250120_102034 from './20250120_102034';

export const migrations = [
  {
    up: migration_20250120_102034.up,
    down: migration_20250120_102034.down,
    name: '20250120_102034'
  },
];
