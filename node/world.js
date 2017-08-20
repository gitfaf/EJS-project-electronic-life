const utils = require('./utils');
const randomMap = require('./map').randomMap;
const BouncingCritter = require('./critter').BouncingCritter;
const CONSTANTS = require('./constants');
const Grid = require('./grid').Grid;
const Vector = require('./vector').Vector;
const View = require('./view').View;
const Wall = require('./wall').Wall;

function World (map, legend) {
    var grid = new Grid(map[0].length, map.length);

    map.forEach(function (line, y) {
        for (let x = 0, length = line.length; x < length; x++) {
            grid.set(new Vector(x, y), utils.elementFromChar(legend, line[x]));
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
            output += utils.charFromElement(element);
        }
        output += '\n';
    }
    return output;
};

World.prototype.turn = function () {
    let acted = [];
    this.grid.forEach(function (critter, vector) {
        if (critter.act && acted.indexOf(critter) !== -1) {
            this.letAct(critter, vector);
            acted.push(critter);
        }
    }, this);
};

World.prototype.letAct = function (critter, vector) {
    let action = critter.act(new View(this, vector));
    if(action && action.type === "move") {
        let destination = this.checkDestination(action, vector);
        if (destination && this.grid.get(destination) === null) {
            this.grid.set(vector, null);
            this.grid.set(destination, critter);
        }
    }
};

World.prototype.checkDestination = function (action, vector) {
    if (CONSTANTS.DIRECTION_VECTORS.hasOwnProperty(action.direction)) {
        var destination = vector.plus(CONSTANTS.DIRECTION_VECTORS[action.direction]);
        if (this.grid.isInside(destination)) {
            return destination;
        }
    }
};

const legend = {
    '#': Wall,
    'o': BouncingCritter
};

function run () {
    let world = new World(randomMap(), legend);
    for (let i = 0; i < 3; i++) {
        world.turn();
        console.log(world.toSring());
    }
}

module.exports = {
    run
};
