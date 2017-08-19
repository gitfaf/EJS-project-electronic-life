const maps = require('./constants').maps;
const randomElement = require('./utils').randomElement;

function randomMap () {
    return randomElement(maps);
}

module.exports = {
    randomMap
};
