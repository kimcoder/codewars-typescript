const CHARS: string[] = [
    "qwertyuiop",
    "asdfghjkl",
    "zxcvbnm,.",
];
const CHARS_UPPERS: string[] = [
    "QWERTYUIOP",
    "ASDFGHJKL",
    "ZXCVBNM<>",
];

const getStringKey = (key: number) => (key < 100) ? (key < 10) ? "00" + String(key) : "0" + String(key) : String(key);
const getLineIndex = (char: string) => {
    if (CHARS[0].indexOf(char.toLowerCase()) > -1) {
        return 0;
    } else if (CHARS[1].indexOf(char.toLowerCase()) > -1) {
        return 1;
    } else {
        return 2;
    }
};
const shiftChar = (char: string, lineIdx: number, shift: number) => {
    const isUppercase: boolean = (CHARS_UPPERS[lineIdx].indexOf(char) > -1);
    const charIdx: number = CHARS[lineIdx].indexOf(char.toLowerCase());
    const shiftIdx: number = (charIdx + shift < 0) ? charIdx + shift + CHARS[lineIdx].length : (charIdx + shift) % CHARS[lineIdx].length;
     
    return isUppercase ? CHARS_UPPERS[lineIdx][shiftIdx] : CHARS[lineIdx][shiftIdx];
};


export function encrypt(text: string, key: number): string {
    return text.split("").reduce((sum: string, char: string, i: number) => {
        if (char.search(/[a-zA-Z,.<>]/) < 0) {
            return sum + char;
        }
        const lineIdx: number = getLineIndex(char);
        const shift: number = Number(getStringKey(key)[lineIdx]);

        console.log(`[encrypt] char : ${char}`);
        console.log(`[encrypt] lineIdx : ${lineIdx}`);
        console.log(`[encrypt] shift : ${shift}`);
        console.log(` `);

        return sum + shiftChar(char, lineIdx, shift);
    }, "");
}

export function decrypt(text:string, key:number): string {
    return text.split("").reduce((sum: string, char: string, i: number) => {
        if (char.search(/[a-zA-Z,.<>]/) < 0) {
            return sum + char;
        }
        const lineIdx: number = getLineIndex(char);
        const shift: number = Number(getStringKey(key)[lineIdx]) * -1;

        console.log(`[decrypt] char : ${char}`);
        console.log(`[decrypt] lineIdx : ${lineIdx}`);
        console.log(`[decrypt] shift : ${shift}`);
        console.log(` `);
        return sum + shiftChar(char, lineIdx, shift);
    }, "");
}

// console.log(encrypt("Ball", 134));
// console.log(decrypt(">fdd", 134));

console.log(encrypt("z|bcrIlg qqpxupo fqgocd on aymks r", 822));
console.log("c|mbwYsj ooivtiu hojubg u, dr.af w");
