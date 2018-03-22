export function solution(number: number): string {
    // convert the number to a roman numeral
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

    return number.toString().split("").reduce((sum: string, char: string, idx: number, arr: string[]) => {
        const size: number = arr.length - idx;

        return sum += (char === "0") ? "" : romanNumbers[char][size-1];
    }, "");
}

// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// console.log(solution(1000));    // 'M', '1000 should == "M"')
// console.log(solution(4));       // 'IV', '4 should == "IV"')
// console.log(solution(1));       // 'I', '1 should == "I"')
// console.log(solution(1990));    // 'MCMXC', '1990 should == "MCMXC"')
// console.log(solution(2008));    // 'MMVIII', '2008 should == "MMVIII"')