import * as migration_20250120_095738 from './20250120_095738';

export const migrations = [
  {
    up: migration_20250120_095738.up,
    down: migration_20250120_095738.down,
    name: '20250120_095738'
  },
];
