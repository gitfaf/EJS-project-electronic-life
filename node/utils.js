console.log('utils.js');

function randomElement (array) {
    console.log('utils:', randomElement);
    return array[Math.floor(Math.random() * array.length)];
}

function elementFromChar (legend, ch) {
    if(ch === ' ') {
        return null;
    }
    let Constructor = legend[ch];
    return new Constructor(ch);
}

function charFromElement (element) {
    return element === null ? ' ' : element.originChar;
}

module.exports = {
    randomElement,
    elementFromChar,
    charFromElement
};
