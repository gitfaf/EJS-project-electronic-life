const directionLib = require('./direction');

const CONSTANTS = {
    emptyCell: ' ',
    filledCell: '#',
    maps: [
        [
            '####################',
            '##  o      o      ##',
            '##      #   #     ##',
            '##        o       ##',
            '##  #   #   #     ##',
            '##   #       #    ##',
            '##    o   o#      ##',
            '##      #         ##',
            '##      #o#o      ##',
            '####################',
        ],
        [
            '####################',
            '##  o #           ##',
            '##      #   #     ##',
            '##                ##',
            '##  #   o   #     ##',
            '##   #       #    ##',
            '##    o   ##      ##',
            '##      #         ##',
            '##      # #       ##',
            '####################',
        ]
    ],
    DIRECTION_VECTORS: directionLib.DIRECTION_VECTORS,
    DIRECTIONS: directionLib.DIRECTIONS,
    randomDirection: directionLib.randomDirection,
    randomDirectionVector: directionLib.randomDirectionVector
};

module.exports = CONSTANTS;
