import { CONSTANTS } from './constants.js';
import { randomElement } from './utils.js';

export function randomMap () {
    return randomElement(CONSTANTS.maps);
}
