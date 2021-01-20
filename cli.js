#! /usr/bin/env node

const { Command } = require("commander");

const package = require("./package.json");
const GraphqlMerge = require("./src/index");

/**
 * Setting up the Commander
 */
const program = new Command();

program
  .version(package.version)
  .requiredOption(
    "-p, --path <string>",
    "path containing graphql schema files to be merged"
  )
  .requiredOption(
    "-n, --name <string>",
    "name of the new combined file that will be created"
  );

program.parse();

/**
 * Getting the supplied parameters
 */
const { path, name } = program.opts();

/**
 * Calling GraphqlMerge
 */
GraphqlMerge(path, name);
