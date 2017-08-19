const CONSTANTS = require('./constants');

function randomElement (array) {
    return array[Math.floor(Math.random() * array.length)];
}

function elementFromChar (legend, ch) {
    if(ch === CONSTANTS.emptyCell) {
        return null;
    }
    let Constructor = legend[ch];
    return new Constructor(ch);
}

function charFromElement (element) {
    return element === null ? CONSTANTS.emptyCell : element.originChar;
}

module.exports = {
    randomElement,
    elementFromChar,
    charFromElement
};
