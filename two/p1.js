const { readFileSync } = require('fs');
const data = readFileSync('./p1.txt').toString().split('\r\n');
let two = 0, three = 0, checksum = 0;
for (const seq of data) {
	const str = seq.split('');
	let foundTwo = false, foundThree = false;
	for (const letter of str) {
		if (!foundTwo && str.filter(l => l === letter).length === 2) {
			two++;
			foundTwo = true;
		}
		if (!foundThree && str.filter(l => l === letter).length === 3) {
			three++;
			foundThree = true;
		}
		if (foundTwo && foundThree) break;
	}
}
checksum = two * three;
console.log(checksum);
