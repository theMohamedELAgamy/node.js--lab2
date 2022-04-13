let fs= require('fs')
let Path = require('path')
// async way
var readfile=fs.createReadStream('./greet.txt', {encoding: 'utf8', highWaterMark: 32*1024})

readfile.on('data',function(chunk){
    const lines = chunk.split(/\r?\n/);
    lines.forEach(element => {
        console.log(element)
    });
})

//rename file
const oldPath = Path.join( "./info.txt")  
const newPath = Path.join( "./mohamed.txt ")

fs.renameSync(oldPath, newPath)  

// delete file
fs.unlink('./file.txt', (err) => {
    if (err) {
        throw err;
    }

    console.log("File is deleted.");
});

//async way
var readfile=fs.createReadStream('./data.json', {encoding: 'utf8', highWaterMark: 32*1024})

readfile.on('data',function(chunk){
    console.log(JSON.parse(chunk))
})

// sync way
let content=fs.readFileSync('./data.json','utf8')
console.log(JSON.parse(content))
 
// write to file
var wrtieable = fs.createWriteStream('info.txt')
wrtieable.write('hello iti')

//create directory
fs.mkdir('./bonus', (err) => {
    if (err) {
        throw err;
    }
    console.log("Directory is created.");
});
