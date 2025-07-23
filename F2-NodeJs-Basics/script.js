const fs = require('fs');
const http = require('http');

// fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
//     if (err) {
//         console.error('Error writing file:', err);  
//     }
//     else {
//         console.log('File written successfully!');
//     }
// });

// fs.appendFile('example.txt', '\nAppending some text.', (err) => {
//     if (err) {
//         console.error('Error appending to file:', err);
//     } else {
//         console.log('File appended successfully!');
//     }
// });

// fs.rename('example.txt', 'newExample.txt', (err) => {
//     if (err) {
//         console.error('Error renaming file:', err);
//     } else {
//         console.log('File renamed successfully!');
//     }
// });

// fs.copyFile('newExample.txt', './copy/copiedExample.txt', (err) => {
//     if (err) {
//         console.error('Error copying file:', err);
//     } else {
//         console.log('File copied successfully!');
//     }
// });

// we can write err.message instead of err

// fs.unlink('newExample.txt', (err) => {
//     if (err) {
//         console.error('Error deleting file:', err);
//     } else {
//         console.log('File deleted successfully!');
//     }
// });

// NOTE: fs.rmdir is used to delete a directory, but it must be empty.
// For Eample:
// fs.rmdir('./copy', function(err) {
//     if (err) {
//         console.error('Error deleting directory:', err);
//     } else {
//         console.log('Directory deleted successfully!');
//     }
// });

// If directory is not empty, we can use fs.rmdir with recursive option
// fs.rmdir('./copy', {recursive: true}, function(err) {
//     if (err) {
//         console.error('Error deleting directory:', err);
//     } else {
//         console.log('Directory deleted successfully!');
//     }
// });

// NOTE: Use fs.rm as per the new version of Node.js



// HTTP Module

const server = http.createServer((req, res) => {
    res.end('Hello, Node.js HTTP Server!');
});

server.listen(3000);





// Node.js Basics

// Introduction to Node.js
// Installation and setup of Node.js and npm

// Working with Node.js modules

// File working operations in Node.js
// understanding HTTP modules in Node.js

// after finishing it
// Node.js docs -> file system 
// study :
// 1. writefile
// 2. readfile
// 3. appendfile
// 4. unlink
// 5. rename
// 6. copyfile

