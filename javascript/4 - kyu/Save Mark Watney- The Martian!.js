"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const marsRdius = 3390;
const getLocationBy2L = (c) => {
    const isSouth = /S/.test(c);
    const isEast = /E/.test(c);
    const y = Number(c.replace(/[^\d,.]/g, "").split(",")[0]) + (isSouth ? 90 : 0);
    const x = Number(c.replace(/[^\d,.]/g, "").split(",")[1]) + (isEast ? 180 : 0);
    return { x, y };
};
const getDistanceBetweenLocation = (loc1, loc2) => {
    console.log(`[getDistanceBetweenLocation] ${loc1} ${loc2}`);
    return 0;
};
function saveMark(c1, c2) {
    const loc1 = getLocationBy2L(c1);
    const loc2 = getLocationBy2L(c2);
    console.log(loc1);
    console.log(loc2);
    return "";
}
exports.saveMark = saveMark;
console.log(saveMark("48.23° N, 89.10° E", "48.84° N, 89.40° E"), "30KM");
