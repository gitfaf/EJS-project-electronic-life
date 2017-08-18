import { CONSTANTS } from './constants.js';
import { randomElement } from './utils.js';

export function randomPlan () {
    return randomElement(CONSTANTS.plans);
}
