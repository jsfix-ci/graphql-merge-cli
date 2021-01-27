
const fs = require('fs');
const { join } = require('path');

const { loadFilesSync } = require('@graphql-tools/load-files');

const merge = require("./merge");

module.exports = (path, name) => {
    // Loading all schema files under the received path
    // todo: dirty way of getting the root directory and appending the passed path to it
    const pathToBeSearched = join(__dirname, "../", `${path}/**/*.graphql`);

    console.log(`Searching in ${pathToBeSearched}`);
    const files = loadFilesSync(pathToBeSearched);

    // Merging all schema files
    const combinedFile = merge(files);
    
    // Creating the final combined file
    fs.writeFileSync(name, combinedFile);

    console.log(`Scanned all schema files under ${path} and created a combined schema file named ${name}`);
};
