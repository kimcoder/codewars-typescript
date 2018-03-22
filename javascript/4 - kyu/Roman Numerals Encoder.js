"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution(number) {
    const romanNumbers = {
        "1": ["I", "X", "C", "M"],
        "2": ["II", "XX", "CC", "MM"],
        "3": ["III", "XXX", "CCC", "MMM"],
        "4": ["IV", "XL", "CD"],
        "5": ["V", "L", "D"],
        "6": ["VI", "LX", "DC"],
        "7": ["VII", "LXX", "DCC"],
        "8": ["VIII", "LXXX", "DCCC"],
        "9": ["IX", "XC", "CM"],
    };
    return number.toString().split("").reduce((sum, char, idx, arr) => {
        const size = arr.length - idx;
        return sum += (char === "0") ? "" : romanNumbers[char][size - 1];
    }, "");
}
exports.solution = solution;
