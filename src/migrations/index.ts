import * as migration_20250120_095738 from './20250120_095738';
import * as migration_20250120_101214 from './20250120_101214';

export const migrations = [
  {
    up: migration_20250120_095738.up,
    down: migration_20250120_095738.down,
    name: '20250120_095738',
  },
  {
    up: migration_20250120_101214.up,
    down: migration_20250120_101214.down,
    name: '20250120_101214'
  },
];
