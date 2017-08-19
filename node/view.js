const CONSTANTS = require('./constants');
const utils = require('./utils');

function View (world, vector) {
    this.world = world;
    this.vector = vector;
}

View.prototype.look = function (direction) {
    let target = this.vector.plus(CONSTANTS.DIRECTION_VECTORS[direction]);
    if (this.world.grid.isInside(target)) {
        return utils.charFromElement(this.world.grid.get(target));
    } else {
        return '#';
    }
};

View.prototype.findAll = function (direction) {
    let found = [];
    for (let d in CONSTANTS.DIRECTION_VECTORS) {
        if (this.look(d) === direction) {
            found.push(d);
        }
    }
    return found;
};

View.prototype.find = function (direction) {
    let found = this.findAll(direction);
    if (found.length === 0) {
        return null;
    }
    return utils.randomElement(found);
};

module.exports = {
    View
};
