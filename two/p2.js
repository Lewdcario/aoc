const { readFileSync } = require('fs');
const data = readFileSync('./p1.txt').toString().split('\r\n');
const predicate = (a, b) => {
	let diff = 0;
	for (let i = 0; i < a.length; ++i) {
		if (a[i] !== b[i]) diff++;
	}
	if (diff === 1) return true;
	return false;
}
let out = new Set();
for (let i = 0; i < data.length; ++i) {
	for (let j = 0; j < data.length; ++j) {
		if (predicate(data[i], data[j])) {
			out.add(data[i]);
			out.add(data[j]);
		}
	}
}
out = Array.from(out);
for (let i = 0; i < out[0].length; ++i) {
	if (out[0][i] !== out[1][i]) {
		out[0] = out[0].slice(0, i) + out[0].slice(i + 1);
		out[1] = out[1].slice(0, i) + out[1].slice(i + 1);
		break;
	}
}
console.log(out[0]);
