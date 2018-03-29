export const calculate = (sum: string) => {
    if (sum.search(/[^0-9\.e+*$-]/) > -1) {
        return "400: Bad request";
    }
    if (sum.indexOf("+-") > -1) {
        sum = sum.replace("+-", "-");
    } 
    
    console.log(`[calculate] ${sum}`);

    let pattern: RegExp;
    let nonPattern: RegExp;

    if (sum.search(/(\d+\.\d+|\d+)\$(\d+\.\d+|\d+)/) > -1) {
        pattern = /(\d+\.\d+|\d+)\$(\d+\.\d+|\d+)/;
        nonPattern = /^((\d+\.\d+|\d+)\$(\d+\.\d+|\d+))/;
    } else if (sum.search(/(\d+\.\d+|\d+)\*(\d+\.\d+|\d+)/) > -1) {
        pattern = /(\d+\.\d+|\d+)\*(\d+\.\d+|\d+)/;
        nonPattern = /^((\d+\.\d+|\d+)\*(\d+\.\d+|\d+))/;
    } else if (sum.search(/(\d+\.\d+|\d+)\-(\d+\.\d+|\d+)/) > -1) {
        pattern = /(\d+\.\d+|\d+)\-(\d+\.\d+|\d+)/;
        nonPattern = /^((\d+\.\d+|\d+)\-(\d+\.\d+|\d+))/;
    } else if (sum.search(/(\d+\.\d+|\d+)\+(\d+\.\d+|\d+)/) > -1) {
        pattern = /(\d+\.\d+|\d+)\+(\d+\.\d+|\d+)/;
        nonPattern = /^((\d+\.\d+|\d+)\+(\d+\.\d+|\d+))/;
    }

    if (pattern!) {
        const subExp: string = sum.substr(sum.search(pattern!));
        const temp: string = subExp.replace(nonPattern!, "");
        const isNegative: boolean = (sum.charAt(0) === "-" && sum.search(pattern!) === 1);
        const subResult: string = calculateStr(subExp.replace(temp, ""), isNegative);

        if (sum.length <= subExp.length + 1 && temp.length === 0) {
            return parseFloat(subResult);
        } else {
            return calculate(sum.replace((isNegative ? "-"+subExp : subExp), subResult + temp));
        }
    } else {
        return parseFloat(sum);
    }
}

const calculateStr = (str: string, isNegativeFirst: boolean): string => {
    const n1: number = parseFloat(str.split(/[+|\-|*|$]/)[0]) * (isNegativeFirst ? -1 : 1);
    const n2: number = parseFloat(str.split(/[+|\-|*|$]/)[1]);

    if (str.indexOf("$") > -1) {
        return (n1 / n2).toFixed(20);
    } else if (str.indexOf("*") > -1) {
        return (n1 * n2).toFixed(20);
    } else if (str.indexOf("-") > -1) {
        return (n1 - n2).toFixed(20);
    } else {
        return (n1 + n2).toFixed(20);
    }
}

// console.log(calculate("1.1+1.9"), 2);  
// console.log(calculate("10$2"), 5); 
// console.log(calculate("1.5*3"), 4.5);
// console.log(calculate("5+5+5+5"), 20);
console.log(calculate("1000$2.5$5+5-5+6$6"), 81);
