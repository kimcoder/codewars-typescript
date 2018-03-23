const maxSequence = (arr: number[]) => {
	let result: number[] = [];
	if (arr.toString().search(/,\d/) < 0) {
        return 0;
    }

	arr.forEach((e: number, i: number, ar: number[]) => {
		ar.slice(i, arr.length).reduce((prev: number, current: number) => {
			result.push(prev + current);
			return prev + current;
		}, 0);
	});
	
	return result.sort((a, b) => b-a)[0];
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))