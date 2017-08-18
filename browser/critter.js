import { randomDirection } from './direction.js';
import { CONSTANTS } from './constants.js';

export function BouncingCritter (originChar) {
    this.originChar = originChar;
    this.direction = randomDirection();
}
BouncingCritter.prototype.isUnsuitableDirection = function (view) {
    return view.look(this.direction) !== CONSTANTS.emptyCell;
};
BouncingCritter.prototype.findSuitableDirection = function (view) {
    let direction = view.find(CONSTANTS.emptyCell);
    if (!direction) {
        while (direction !== this.direction) {
            direction = randomDirection();
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
