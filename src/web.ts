import { WebPlugin } from '@capacitor/core';

import type { SimpleBackgroundTimerPlugin } from './definitions';

export class SimpleBackgroundTimerWeb extends WebPlugin implements SimpleBackgroundTimerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
