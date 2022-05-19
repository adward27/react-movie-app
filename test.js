const { writeFile } = require('fs');
const { Buffer } = require('buffer');

const array = new Uint16Array(2);
array[0] = 5000;
array[1] = 4000;

const buffer = Buffer.from(array.buffer);
console.log(buffer);
writeFile('output.txt', buffer, (err) => {
    if (err) throw err;
    console.log('done');
});