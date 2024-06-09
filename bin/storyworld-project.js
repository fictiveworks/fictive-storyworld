#!/usr/bin/env node
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
import { readFileSync, existsSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import prompts from "prompts";
import { Convention, provideFormat } from "../lib/esm/boilerplate/formatters.js";

function isUnityProject() {
  return existsSync(join(process.cwd(), "Assets"));
}

function isNodeProject() {
  return existsSync(join(process.cwd(), "package.json"));
}

function banner(args) {
  const bannerPath = join(__dirname, "storyworld-banner.txt");
  console.log(readFileSync(bannerPath).toString());
}

function help(args) {
  const helpPath = join(__dirname, "storyworld-help.txt");
  console.log(readFileSync(helpPath).toString());
}

function compile(args) {

}

const targetFrameworks = [
  { title: "Delver (Unity)", value: "delver" },
  { title: "Flatland (JavaScript)", value: "flatland" }
];

function detectTargetFramework(prev, values) {
  if (isUnityProject()) return targetFrameworks.findIndex(v => v.value == "delver");
  if (isNodeProject()) return targetFrameworks.findIndex(v => v.value == "flatland");
  return 0;
}

function detectInstallPath(prev, values) {
  if (values.framework == "delver") {
    return join("Assets", "World");
  } else {
    return join("src", "world");
  }
}

let format = null;

function provideFormatInstance(values) {
  if (!format) {
    format = provideFormat(
      (values.framework == "delver") ? Convention.PascalCase : Convention.KebabCase
    );
  }
  return format
}

function formatInitialLevel(prev, values) {
  const { toId } =provideFormatInstance(values);
  return toId("overworld");
}

function installFolders(folders) {
  let currentPath = process.cwd();
  let nextPath;

  for (const f of folders) {
    const folderLevel = Array.isArray(f) ? f : [f];
    for (const folder of folderLevel) {
      nextPath = join(currentPath, folder);
      mkdirSync(nextPath);
    }
    currentPath = nextPath;
  }
}

function installDefinition(definitionPath, definitionObject) {
  writeFileSync(
    join(process.cwd(), definitionPath),
    JSON.stringify(definitionObject, null, 2)
  );
}

function init(args) {
  const questions = [
    {
      type: "select",
      name: "framework",
      message: "Target framework:",
      choices: targetFrameworks,
      initial: detectTargetFramework
    },
    {
      type: "text",
      name: "worldPath",
      message: "Path for world assets:",
      initial: detectInstallPath
    },
    {
      type: "text",
      name: "initialLevel",
      message: "Initial level name:",
      initial: formatInitialLevel
    }
  ];
  
  (async () => {
    const response = await prompts(questions);

    try {
      const { toId } = provideFormatInstance(response);
      const worldData = {levels: [response.initialLevel]};

      if (existsSync(join(response.worldPath, toId("world.json")))) {
        throw new Error(`Storyworld already installed in ${response.worldPath}`);
      }

      installFolders([response.worldPath, toId("levels"), toId(response.initialLevel)]);
      installDefinition(join(response.worldPath, `${toId("world")}.json`), worldData);
      installDefinition(join(response.worldPath, toId("levels"), toId(response.initialLevel), `${toId(response.initialLevel)}.json`), {});

      console.log(`\nSuccessfully installed in ${response.worldPath}`);
    } catch (err) {
      console.error(`\nSomething went wrong:`);
      console.error(err.message);
    }
  })();
}

if (process.argv.length > 0) {
  switch(process.argv[2]) {
    case "help": help(process.argv); break;
    case "compile": help(process.argv); break;
    case "init": init(process.argv); break;
    default: banner(process.argv); break;
  }
} else {
  banner(process.argv);
}