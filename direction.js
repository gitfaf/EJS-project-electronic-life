var Vector = require('./vector').Vector;
const utils = require('./utils');

const DIRECTIONS = ["n", "ne", "e", "se", "s", "sw", "w", "nw"];

const DIRECTION_VECTORS = {
    n: new Vector(0, -1),
    ne: new Vector(1, -1),
    e: new Vector(1, 0),
    se: new Vector(1, 1),
    s: new Vector(0, 1),
    sw: new Vector(-1, 1),
    w: new Vector(-1, 0),
    nw: new Vector(-1, -1)
};

function randomDirection() {
    return utils.randomElement(DIRECTIONS);
}

function randomDirectionVector () {
    return DIRECTION_VECTORS[randomDirection(DIRECTIONS)];
}

module.exports = {
    DIRECTIONS,
    DIRECTION_VECTORS,
    randomDirection
};
