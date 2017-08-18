import { Vector } from './vector.js';
import { randomElement } from './utils.js';

export const DIRECTIONS = ["n", "ne", "e", "se", "s", "sw", "w", "nw"];

export const DIRECTION_VECTORS = {
    n: new Vector(0, -1),
    ne: new Vector(1, -1),
    e: new Vector(1, 0),
    se: new Vector(1, 1),
    s: new Vector(0, 1),
    sw: new Vector(-1, 1),
    w: new Vector(-1, 0),
    nw: new Vector(-1, -1)
};

export function randomDirection() {
    return utils.randomElement(DIRECTIONS);
}

export function randomDirectionVector () {
    return DIRECTION_VECTORS[randomDirection(DIRECTIONS)];
}
