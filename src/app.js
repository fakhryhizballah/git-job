let date = new Date();
console.log(date);

const fs = require('fs');
fs.writeFileSync('./src/file/notes.txt', "date: " + date + "\n");