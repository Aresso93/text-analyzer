const fs = require("fs");

const inputUrl = process.argv[2];

const splittedInputUrl = inputUrl.split('.');
const output = '.' + splittedInputUrl[1] + '-report.' + splittedInputUrl[splittedInputUrl.length - 1];

let data = readFile(inputUrl);
if (data) {
  const charactersCount = countCharacters(data);
  const wordsCount = countWords(data);
  const mostCommonCharacter = findMostCommonCharacter(data);
  const mostCommonWord = findMostCommonWord(data);

  const report = `Il file di input ha ${charactersCount} caratteri esclusi gli spazi, e ${wordsCount} parole.\nIl carattere più comune è '${mostCommonCharacter.char}' e appare ${mostCommonCharacter.count} volte.\nLa parola più comune è '${mostCommonWord.word}' e appare ${mostCommonWord.count} volte.`;

  console.log(report);
  writeData(output, report);
}

function readFile(url) {
  try {
    const data = fs.readFileSync(url, "utf8");
    return data;
  } catch (err) {
    console.error(err.message);
    return null;
  }
}

function writeData(url, data) {
  try {
    fs.writeFileSync(url, data);
  } catch (err) {
    console.error(err.message);
  }
}

function countCharacters(text) {
  // Remove spaces from the text before counting characters
  const textWithoutSpaces = text.replace(/\s+/g, '');
  return textWithoutSpaces.length;
}

function countWords(text) {
  // Remove leading and trailing spaces from the text
  const trimmedText = text.trim();
  // Split the text into words using one or more spaces as the separator
  const wordsArray = trimmedText.split(/\s+/);
  return wordsArray.length;
}
function findMostCommonCharacter(text) {
    const characterOccurrences = {};
  
    // Remove spaces from the text before counting characters
    const textWithoutSpaces = text.replace(/\s+/g, '');
  
    for (const char of textWithoutSpaces) {
      if (char !== ' ') {
        characterOccurrences[char] = (characterOccurrences[char] || 0) + 1;
      }
    }
  
    let mostCommonChar = { char: '', count: -1 };
    for (const char in characterOccurrences) {
      if (characterOccurrences[char] > mostCommonChar.count) {
        mostCommonChar.char = char;
        mostCommonChar.count = characterOccurrences[char];
      }
    }
  
  
    return mostCommonChar;
  }
  
  


function findMostCommonWord(text) {
  const wordMap = new Map();

  // Remove leading and trailing spaces from the text
  const trimmedText = text.trim();
  // Split the text into words using one or more spaces as the separator
  const wordsArray = trimmedText.split(/\s+/);

  for (const word of wordsArray) {
    wordMap.set(word, (wordMap.get(word) || 0) + 1);
  }

  let mostCommonWord = { word: '', count: 0 };
  for (const [word, count] of wordMap.entries()) {
    if (count > mostCommonWord.count) {
      mostCommonWord = { word, count };
    }
  }

  return mostCommonWord;
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

