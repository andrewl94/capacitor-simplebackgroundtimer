import { WebPlugin } from '@capacitor/core';

import type { SimpleBackgroundTimerPlugin } from './definitions';

export class SimpleBackgroundTimerWeb extends WebPlugin implements SimpleBackgroundTimerPlugin {

  async startInterval(options: { interval: number }): Promise<{ value: boolean }> {
    console.log('ECHO',options);
    return  {value:true};
  }

  async stopInterval(options: Record<string, never> ): Promise<{ value: boolean }> {
    console.log('ECHO', options);
    return  {value:true};
  }

}
