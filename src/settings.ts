const DefaultWorldFile = "world.json";

class Settings {
  readonly worldDir : string;
  readonly worldFile : string;

  constructor(worldDir : string, worldFile?: string) {
    this.worldDir = worldDir;
    this.worldFile = worldFile ? worldFile : DefaultWorldFile;
  }
}

export default Settings;