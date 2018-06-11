"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function superStreetFighterSelection(fighters, position, moves) {
    const verLength = fighters.length;
    const characters = [];
    moves.forEach(e => {
        switch (e) {
            case "up":
                if (position[0] - 1 >= 0 && fighters[position[0] - 1][position[1]] != "") {
                    position[0] = position[0] - 1;
                }
                break;
            case "down":
                if (position[0] + 1 < verLength && fighters[position[0] + 1][position[1]] != "") {
                    position[0] = position[0] + 1;
                }
                break;
            case "left":
                position[1] = getHorizonIdx(fighters[position[0]], position[1], true);
                break;
            case "right":
                position[1] = getHorizonIdx(fighters[position[0]], position[1], false);
                break;
        }
        characters.push(fighters[position[0]][position[1]]);
    });
    return characters;
}
exports.superStreetFighterSelection = superStreetFighterSelection;
const getHorizonIdx = (array, idx, isLeft) => {
    let nextIdx = isLeft ? idx - 1 : idx + 1;
    if (nextIdx < 0) {
        nextIdx = array.length - 1;
    }
    else if (nextIdx >= array.length) {
        nextIdx = 0;
    }
    if (array[nextIdx] != "") {
        return nextIdx;
    }
    else {
        return getHorizonIdx(array, nextIdx, isLeft);
    }
};
