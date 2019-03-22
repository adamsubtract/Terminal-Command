const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
     const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
   });
};

module.exports.touch = () => {
  fs.writeFile('afile.txt','My name is adam', (err) => {
      if (err) {
          return `Error: ${err}`;
      }
      console.log('File has been created');
  })
};

module.exports.mkdir = () => {
  fs.mkdir('afolder',(err) => {
      if (err) {
          return `Error: ${err}`;
      }
      console.log('Folder has been created');
  })
};
