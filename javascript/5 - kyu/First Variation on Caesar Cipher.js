"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class G964 {
}
G964.movingShift = (s, shift) => {
    let sArr = [];
    let leng = Math.ceil(s.length / 5);
    let val = "";
    for (let i = 0; i < s.length; i += 1) {
        const char = s.charAt(i);
        const charCode = G964.getShiftCharCode(s.charCodeAt(i), i % 26 + shift, false);
        val += /[a-zA-Z]/.test(char) ? String.fromCharCode(charCode) : char;
    }
    for (let i = 0; i < 5; i++) {
        sArr.push(val.substr(leng * i, leng));
    }
    return sArr;
};
G964.demovingShift = (arr, shift) => {
    const string = arr.reduce((a, b) => a + b);
    let val = "";
    for (let i = 0; i < string.length; i += 1) {
        const char = string.charAt(i);
        const code = G964.getShiftCharCode(string.charCodeAt(i), i % 26 + shift, true);
        val += /[a-zA-Z]/.test(char) ? String.fromCharCode(code) : char;
    }
    return val;
};
G964.getShiftCharCode = (charCode, shift, isLeftShift) => {
    const isUpper = (charCode <= "Z".charCodeAt(0));
    const lastCode = (isUpper) ? "Z".charCodeAt(0) : "z".charCodeAt(0);
    const firstCode = (isUpper) ? "A".charCodeAt(0) : "a".charCodeAt(0);
    if (isLeftShift) {
        return (charCode - shift < firstCode) ? (charCode - shift + lastCode) - firstCode + 1 : charCode - shift;
    }
    else {
        return (charCode + shift > lastCode) ? (charCode + shift - lastCode) + firstCode - 1 : charCode + shift;
    }
};
exports.G964 = G964;
const u = "I should have known that you would have a perfect answer for me!!!";
const sol = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"];
console.log(G964.movingShift(u, 1));
console.log(sol);
console.log(G964.demovingShift(sol, 1));
console.log(u);
