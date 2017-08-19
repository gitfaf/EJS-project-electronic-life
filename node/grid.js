function Grid (width, height) {
    this.space = new Array(width * height);
    this.width = width;
    this.height = height;
}

Grid.prototype.isInside = function (vector) {
    return vector.x >= 0 && vector.x < this.width &&
        vector.y >= 0 && vector.y < this.height;
};

Grid.prototype.get = function (vector) {
    return this.space[vector.x + this.width * vector.y];
};

Grid.prototype.set = function (vector, value) {
    this.space[vector.x + this.width * vector.y] = value;
};

Grid.prototype.forHeight = function (action, context) {
    for (let y = 0; y < this.height; y++) {
        action.call(context, y);
    }
}

Grid.prototype.forWidth = function (action, context) {
    for (let x = 0; x < this.width; x++) {
        action.call(context, x);
    }
}

Grid.prototype.forEach = function (action, context) {
    let grid = this;
    grid.forHeight(function (y) {
        grid.forWidth(function (x) {
            let value = grid.space[x + y * grid.width];
            if (value != null) {
                action.call(context, value, new Vector(x, y));
            }
        });
    });
};

module.exports = {
    Grid
};
