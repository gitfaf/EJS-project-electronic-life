const utils = require('./utils');
const directionLib = require('./direction');
const CONSTANTS = require('./constants');

function BouncingCritter (originChar) {
    this.originChar = originChar;
    console.log('critter:', directionLib);
    this.direction = directionLib.randomDirection();
}
BouncingCritter.prototype.isUnsuitableDirection = function (view) {
    return view.look(this.direction) !== CONSTANTS.emptyCell;
};
BouncingCritter.prototype.findSuitableDirection = function (view) {
    let direction = view.find(CONSTANTS.emptyCell);
    if (!direction) {
        while (direction === this.direction) {
            direction = directionLib.randomDirection();
        }
    }
    return direction;
};
BouncingCritter.prototype.act = function (view) {
    if (this.isUnsuitableDirection(view)) {
        this.direction = this.findSuitableDirection(view);
    }
    return {
        type: 'move',
        direction: this.direction
    };
};

module.exports = {
    BouncingCritter
};
