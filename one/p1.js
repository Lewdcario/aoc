const fs = require('fs');
fs.readFile('./p1.txt', (err, data) => {
	console.log(data.toString().split('\n').reduce((prev, curr) => Number(curr) + prev, 0));
});
