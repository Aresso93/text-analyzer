const fs = require("fs");

const inputUrl = process.argv[2];

const splittedInputUrl = inputUrl.split('.');
const output = '.'+splittedInputUrl[1] + '-report.' + splittedInputUrl[splittedInputUrl.length - 1];



let data = readFile(inputUrl)
 console.log(data)


 if (data) {

    const result = 'ciao';

    writeData(output, result);
}

function readFile(url){
    try {
        const data = fs.readFileSync(url, "utf8");
        return data;
    } catch (err) {
        console.error(err.message);
        return null;
    }
}


function writeData(url, data){


    try {
        fs.writeFileSync(url, data);
    } catch (err) {
        console.error(err.message);
    }
}


function myFunction(){

}





// let transformFunction;
// if (ext.toLowerCase().includes('json')) {
//     transformFunction = require('./csv-converter');
// } else if (ext.toLowerCase().includes('csv')){
//     transformFunction = require('./json-converter');
// } else {
//     console.log('non posso convertire i file: ' + ext);
//     process.exit();
// }

