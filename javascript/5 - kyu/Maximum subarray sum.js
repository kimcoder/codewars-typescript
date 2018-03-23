const maxSequence = (arr) => {
    let result = [];
    if (arr.toString().search(/,\d/) < 0) {
        return 0;
    }
    arr.forEach((e, i, ar) => {
        ar.slice(i, arr.length).reduce((prev, current) => {
            result.push(prev + current);
            return prev + current;
        }, 0);
    });
    return result.sort((a, b) => b - a)[0];
};
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
