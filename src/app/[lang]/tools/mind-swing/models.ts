/**
 * Config model for the Mind Swing app.
 */
export interface IConfig {
  speed: number;
  size: number;
  color: string;
  trajectory: "h" | "v" | "d";
  soundType: "pop" | "click" | "beep" | "none";
}
