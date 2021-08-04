export interface SimpleBackgroundTimerPlugin {

  startInterval(options: { interval: number }): Promise<{ value: boolean }>;

  stopInterval(options: Record<string, never> ): Promise<{ value: boolean }>;

}
