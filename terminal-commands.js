const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
     const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '\n');

    console.log(filesToString);
   });
};

module.exports.touch = (fileName, fileContent) => {
  fs.writeFile(fileName, fileContent, (err) => {
      if (err) {
          return `Error: ${err}`;
      }
      console.log('File \'' + fileName + '\' has been created');
  })
};

module.exports.mkdir = (afolder) => {
  fs.mkdir(afolder,(err) => {
      if (err) {
          return `Error: ${err}`;
      }
      console.log('Folder has been created');
  })
};
