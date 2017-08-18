import { plans } from './constants.js';
import { randomElement } from './utils.js';

export function randomPlan () {
    return randomElement(plans);
}

