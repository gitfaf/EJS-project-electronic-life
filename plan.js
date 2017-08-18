const plans = require('./constants').plans;
const randomElement = require('./utils').randomElement;

function randomPlan () {
    return randomElement(plans);
}

module.exports = {
    randomPlan
};
