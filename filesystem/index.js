const fs = require('fs');


const result = fs.readFile('./filesystem/notes.txt', 'UTF-8', (error, data) => {
  if (error) {
    console.log('error', error);
    return;
  }
  console.log(data);
});

result;
