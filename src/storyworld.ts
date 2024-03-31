import { basename, dirname, join } from "path";
import { existsSync, readFileSync } from "fs";
import globAsync from "glob-promise";
import Settings from "./settings";
import Definition from "./world/definition";
import Bundle from "./world/bundle";

/**
 * Reads a definition file from the provided world directory.
 */
function readDefinition(settings : Settings) : Definition {
  const worldDefinitionPath = join(settings.worldDir, settings.worldFile);

  if (existsSync(worldDefinitionPath)) {
    const contents = readFileSync(worldDefinitionPath);
    const worldDefinition = JSON.parse(contents.toString()) as Definition;
    return worldDefinition;
  } else {
    throw new Error(`${settings.worldFile} does not exist in ${settings.worldDir}`);
  }
}

function collectObjects(definition : Definition, settings: Settings) {

}

/**
 * Collects a bundle of all defined content objects in the world.
 */
async function collect(definition : Definition, settings : Settings) : Promise<Bundle> {
  const objectsAll = await globAsync(`${settings.worldDir}/**/*.json`);
  
  return objectsAll.reduce((bundle : Bundle, objectPath : string) : Bundle => {
    const objectId = basename(objectPath, '.json');
    if (objectId == basename(dirname(objectPath))) {
      if (objectPath.startsWith(`${settings.worldDir}/levels`)) {
        bundle.levels.push(basename(objectId))
      } else if (objectPath.startsWith(`${settings.worldDir}/locations`)) {
        // push location
      }
    }
    return bundle;
  }, new Bundle(definition));
}

function convert(settings : Settings) {

}

function compile(settings : Settings) {

}

export { Settings, Definition, Bundle, readDefinition, collect };