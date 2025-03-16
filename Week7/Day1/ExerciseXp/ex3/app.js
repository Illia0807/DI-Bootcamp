const{readFile,writeFile}=require('./fileManager.js');

readFile('helloWorld.txt').then(()=>{
        writeFile("byWorld.txt","Writing to the file")
})