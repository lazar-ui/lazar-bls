/**
 * Settings model for the Mind Swing app.
 */
export interface ISettings {
  speed: number;
  size: number;
  color: string;
  trajectory: "h" | "v" | "d";
  soundType: "pop" | "click" | "beep" | "none";
}
