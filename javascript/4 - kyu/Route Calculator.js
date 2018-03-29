"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = (sum) => {
    if (sum.search(/[^0-9\.e+*$-]/) > -1) {
        return "400: Bad request";
    }
    if (sum.indexOf("+-") > -1) {
        sum = sum.replace("+-", "-");
    }
    console.log(`[calculate] ${sum}`);
    let pattern;
    let nonPattern;
    if (sum.search(/(\d+\.\d+|\d+)\$(\d+\.\d+|\d+)/) > -1) {
        pattern = /(\d+\.\d+|\d+)\$(\d+\.\d+|\d+)/;
        nonPattern = /^((\d+\.\d+|\d+)\$(\d+\.\d+|\d+))/;
    }
    else if (sum.search(/(\d+\.\d+|\d+)\*(\d+\.\d+|\d+)/) > -1) {
        pattern = /(\d+\.\d+|\d+)\*(\d+\.\d+|\d+)/;
        nonPattern = /^((\d+\.\d+|\d+)\*(\d+\.\d+|\d+))/;
    }
    else if (sum.search(/(\d+\.\d+|\d+)\-(\d+\.\d+|\d+)/) > -1) {
        pattern = /(\d+\.\d+|\d+)\-(\d+\.\d+|\d+)/;
        nonPattern = /^((\d+\.\d+|\d+)\-(\d+\.\d+|\d+))/;
    }
    else if (sum.search(/(\d+\.\d+|\d+)\+(\d+\.\d+|\d+)/) > -1) {
        pattern = /(\d+\.\d+|\d+)\+(\d+\.\d+|\d+)/;
        nonPattern = /^((\d+\.\d+|\d+)\+(\d+\.\d+|\d+))/;
    }
    if (pattern) {
        const subExp = sum.substr(sum.search(pattern));
        const temp = subExp.replace(nonPattern, "");
        const isNegative = (sum.charAt(0) === "-" && sum.search(pattern) === 1);
        const subResult = calculateStr(subExp.replace(temp, ""), isNegative);
        if (sum.length <= subExp.length + 1 && temp.length === 0) {
            return parseFloat(subResult);
        }
        else {
            return exports.calculate(sum.replace((isNegative ? "-" + subExp : subExp), subResult + temp));
        }
    }
    else {
        return parseFloat(sum);
    }
};
const calculateStr = (str, isNegativeFirst) => {
    const n1 = parseFloat(str.split(/[+|\-|*|$]/)[0]) * (isNegativeFirst ? -1 : 1);
    const n2 = parseFloat(str.split(/[+|\-|*|$]/)[1]);
    if (str.indexOf("$") > -1) {
        return (n1 / n2).toFixed(20);
    }
    else if (str.indexOf("*") > -1) {
        return (n1 * n2).toFixed(20);
    }
    else if (str.indexOf("-") > -1) {
        return (n1 - n2).toFixed(20);
    }
    else {
        return (n1 + n2).toFixed(20);
    }
};
