const subArrays = (arr: Array<number>) => {
    if (arr.length === 1) {
        return [arr];
    }
    const subarr = subArrays(arr.slice(1));
    return subarr.concat(subarr.map(e => e.concat(arr[0])), [[arr[0]]]);
};

const filterByLength = (arr: number[][], n: number) => arr.filter(a => a.length === n);

const chooseBestSum = (maxDist: number, towns: number, arr: Array<number>) => {
    const subsets: number[][]  = filterByLength(subArrays(arr), towns);
    let myDist = 0;
    console.log(subsets);
    for (const a of subsets) {
        const sum = a.reduce((a, b) => a + b);
        if (sum <= maxDist && sum >= myDist) {
            myDist = sum;
        }
    }
    return myDist;
};


const ts = [50, 55, 56, 57, 58];
chooseBestSum(163, 3, ts); // 163
