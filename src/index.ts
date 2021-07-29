import { registerPlugin } from '@capacitor/core';

import type { SimpleBackgroundTimerPlugin } from './definitions';

const SimpleBackgroundTimer = registerPlugin<SimpleBackgroundTimerPlugin>('SimpleBackgroundTimer', {
  web: () => import('./web').then(m => new m.SimpleBackgroundTimerWeb()),
});

export * from './definitions';
export { SimpleBackgroundTimer };
