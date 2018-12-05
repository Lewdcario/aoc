const { readFileSync } = require('fs');
const data = readFileSync('./p1.txt').toString().split('\r\n');
const frequencies = new Set();
let total = 0;
const recursion = () => {
	for (const freq of data) {
		if (freq == 0) continue;
		total += Number(freq);
		if (frequencies.has(total)) return total;
		frequencies.add(total);
	}
	return undefined;
}

while (true) {
	const out = recursion();
	if (out === undefined) recursion();
	else {
		console.log(out);
		break;
	}
}
