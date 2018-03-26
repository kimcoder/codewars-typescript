export class G964 {

    public static movingShift = (s: string, shift: number) => {
        let sArr: string[] = [];
        let leng: number = Math.ceil(s.length / 5);
        let val = "";

        for (let i: number =0; i< s.length; i += 1) {
            const char: string = s.charAt(i);
            const charCode: number = G964.getShiftCharCode(s.charCodeAt(i), i % 26 + shift, false);

            val += /[a-zA-Z]/.test(char) ? String.fromCharCode(charCode) : char;
        }
        
        for (let i: number = 0; i < 5; i++) {
            sArr.push(val.substr(leng * i, leng));
        }
        return sArr;
    }

    public static demovingShift = (arr: string[], shift: number) => {
        const string: string = arr.reduce((a , b) => a + b);
        let val = "";
        for (let i: number = 0; i < string.length; i += 1) {
            const char: string = string.charAt(i);
            const code: number = G964.getShiftCharCode(string.charCodeAt(i), i % 26 + shift, true);
            
            val += /[a-zA-Z]/.test(char) ? String.fromCharCode(code) : char;
        }
        
        return val;
    }

    public static getShiftCharCode = (charCode: number, shift: number, isLeftShift: boolean) => {
        const isUpper: boolean = (charCode <= "Z".charCodeAt(0));
        const lastCode: number = (isUpper) ? "Z".charCodeAt(0) : "z".charCodeAt(0);
        const firstCode: number = (isUpper) ? "A".charCodeAt(0) : "a".charCodeAt(0);
        
        if (isLeftShift) {
            return (charCode - shift < firstCode) ? (charCode - shift + lastCode) - firstCode + 1 : charCode - shift;
        } else{
            return (charCode + shift > lastCode) ? (charCode + shift - lastCode) + firstCode - 1 : charCode + shift;
        }
    }
}

const u: string = "I should have known that you would have a perfect answer for me!!!";
const sol: string[] = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"];

console.log(G964.movingShift(u, 1));
console.log(sol);
console.log(G964.demovingShift(sol, 1));
console.log(u);
