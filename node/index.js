let path = require('path');
var MODULE = require('module');
var _require = MODULE.prototype.require;
MODULE.prototype.require = function (name) {
    console.log(`${path.basename(__filename)} required ${name}.`);
    return _require.call(this, name);
}
const world = require('./world');
world.run();