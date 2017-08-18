const CONSTANTS = require('./constants');
const Grid = require('./grid').Grid;
const Vector = require('./vector').Vector;
const Wall = require('./wall').Wall;
const BouncingCritter = require('./critter').BouncingCritter;
const randomPlan = require('./plan').randomPlan;

function elementFromChar (legend, ch) {
    if(ch === CONSTANTS.emptyCell) {
        return null;
    }
    let Constructor = legend[ch];
    return new Constructor(ch);
}

function charFromElement (element) {
    return element === null ? CONSTANTS.emptyCell : element.originChar;
}

function World (map, legend) {
    var grid = new Grid(map[0].length, map.length);

    map.forEach(function (line, y) {
        for (let x = 0, length = line.length; x < length; x++) {
            grid.set(new Vector(x, y), elementFromChar(legend, line[x]));
        }
    });

    this.grid = grid;
    this.map = map;
}

World.prototype.toSring = function () {
    let output = '';
    for (let y = 0; y < this.grid.height; y++) {
        for (let x = 0; x < this.grid.width; x++) {
            let element = this.grid.get(new Vector(x, y));
            output += charFromElement(element);
        }
        output += '\n';
    }
    return output;
};

const legend = {
    '#': Wall,
    'o': BouncingCritter
};

let world = new World(randomPlan(), legend);

console.log(world.toSring());
