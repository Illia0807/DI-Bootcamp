const fs= require('fs').promises;

// fs.readFile(filePath,'utf-8',(err, data) => {
//         if (err) {
//           console.error("Erros read file", err);
//           return;
//         }
//         console.log("File contain:\n", data);
//       });
//what a stile more efective or popular?
async function readFile(filePath) {
        try {
          const data = await fs.readFile(filePath, 'utf8');
          console.log("Erros read file:\n", data);
        } catch (err) {
          console.error("File contain", err);
        }
      }
async function writeFile(filePath,content) {
  try {
    //const data = 'some information for test';
    await fs.writeFile(filePath, content, 'utf8');
    console.log('work done!');
  } catch (err) {
    console.error('Error with writing file:', err);
  }
}

module.exports={readFile,writeFile};