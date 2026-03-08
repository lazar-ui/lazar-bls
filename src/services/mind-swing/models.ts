/**
 * Settings model for the Mind Swing app.
 */
export interface ISettings {
  color: string;
  isRunning: boolean;
  size: number;
  soundType: "pop" | "click" | "beep" | "none";
  speed: number;
  trajectory: "h" | "v" | "d";
}
