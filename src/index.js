
const fs = require('fs');
const { join } = require('path');

const { loadFilesSync } = require('@graphql-tools/load-files');

const merge = require("./merge");

module.exports = (path, name) => {
    // Loading all schema files under the received path
    const files = loadFilesSync(join(__dirname, `${path}/**/*.graphql`));

    // Merging all schema files
    const combinedFiles = merge(files);
    
    // Creating the final combined file
    fs.writeFileSync(name, combinedFiles);

    console.log(`Scanned all schema files under ${path} and created a combined schema file named ${name}`);
};
