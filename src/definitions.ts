export interface SimpleBackgroundTimerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
