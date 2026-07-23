const { Buffer } = require('buffer');

// const buf= new Buffer.alloc(4); //give only 4 bytes of memory
// console.log(buf[1]);

// const buf = Buffer.from('hello world'); //create buffer from string
// console.log(buf);
// console.log(buf.toString()); //convert buffer to string

// const buf2 = Buffer.allocUnsafe(10); //create buffer with 10 bytes of memory but not initialized
// console.log(buf2);

// const buf = Buffer.alloc(10); //create buffer with 10 bytes of memory and initialized with 0
// buf.write('hello'); //write string to buffer
// console.log(buf.toString()); //convert buffer to string

// const buf = Buffer.from('chai aur code'); //create buffer from string
// console.log(buf.toString()); //convert buffer to string
// console.log(buf.toString('utf-8', 0, 4)); //convert buffer to string with encoding and start and end index

// const buf = Buffer.from('Chai'); //create buffer from string
// console.log(buf); //convert buffer to string
// buf[0]= 0x4A
// console.log(buf); //convert buffer to string

const buf1 = Buffer.from('hello'); //create buffer from string
const buf2 = Buffer.from('world'); //create buffer from string
const mergedBuffer = Buffer.concat([buf1, buf2]); //merge two buffers
console.log(mergedBuffer.toString()); //convert buffer to string
console.log(mergedBuffer.length); //get length of buffer