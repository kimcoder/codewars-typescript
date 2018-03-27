"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CHARS = [
    "qwertyuiop",
    "asdfghjkl",
    "zxcvbnm,.",
];
const CHARS_UPPERS = [
    "QWERTYUIOP",
    "ASDFGHJKL",
    "ZXCVBNM<>",
];
const getStringKey = (key) => (key < 100) ? (key < 10) ? "00" + String(key) : "0" + String(key) : String(key);
const getLineIndex = (char) => {
    if (CHARS[0].indexOf(char.toLowerCase()) > -1) {
        return 0;
    }
    else if (CHARS[1].indexOf(char.toLowerCase()) > -1) {
        return 1;
    }
    else {
        return 2;
    }
};
const shiftChar = (char, lineIdx, shift) => {
    const isUppercase = (CHARS_UPPERS[lineIdx].indexOf(char) > -1);
    const charIdx = CHARS[lineIdx].indexOf(char.toLowerCase());
    const shiftIdx = (charIdx + shift < 0) ? charIdx + shift + CHARS[lineIdx].length : (charIdx + shift) % CHARS[lineIdx].length;
    return isUppercase ? CHARS_UPPERS[lineIdx][shiftIdx] : CHARS[lineIdx][shiftIdx];
};
function encrypt(text, key) {
    return text.split("").reduce((sum, char, i) => {
        if (char.search(/[a-zA-Z,.<>]/) < 0) {
            return sum + char;
        }
        const lineIdx = getLineIndex(char);
        const shift = Number(getStringKey(key)[lineIdx]);
        console.log(`[encrypt] char : ${char}`);
        console.log(`[encrypt] lineIdx : ${lineIdx}`);
        console.log(`[encrypt] shift : ${shift}`);
        console.log(` `);
        return sum + shiftChar(char, lineIdx, shift);
    }, "");
}
exports.encrypt = encrypt;
function decrypt(text, key) {
    return text.split("").reduce((sum, char, i) => {
        if (char.search(/[a-zA-Z,.<>]/) < 0) {
            return sum + char;
        }
        const lineIdx = getLineIndex(char);
        const shift = Number(getStringKey(key)[lineIdx]) * -1;
        console.log(`[decrypt] char : ${char}`);
        console.log(`[decrypt] lineIdx : ${lineIdx}`);
        console.log(`[decrypt] shift : ${shift}`);
        console.log(` `);
        return sum + shiftChar(char, lineIdx, shift);
    }, "");
}
exports.decrypt = decrypt;
console.log(encrypt("z|bcrIlg qqpxupo fqgocd on aymks r", 822));
console.log("c|mbwYsj ooivtiu hojubg u, dr.af w");
