const { print } = require('graphql');
const { mergeTypeDefs } = require('@graphql-tools/merge');

module.exports = files => {
    const typeDefs = mergeTypeDefs(files);
    const printedTypeDefs = print(typeDefs);

    return printedTypeDefs;
};
