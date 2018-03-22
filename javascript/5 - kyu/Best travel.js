const subArrays = (arr) => {
    if (arr.length === 1) {
        return [arr];
    }
    const subarr = subArrays(arr.slice(1));
    return subarr.concat(subarr.map(e => e.concat(arr[0])), [[arr[0]]]);
};
const filterByLength = (arr, n) => arr.filter(a => a.length === n);
const chooseBestSum = (maxDist, towns, arr) => {
    const subsets = filterByLength(subArrays(arr), towns);
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
chooseBestSum(163, 3, ts);
