const fs = require('fs');
const path = require('path');


/**
 * Path to contributors json files
 */
const jsonFilePath = `components/contributors`;


/**
 * Sample file
 */
const sampleJsonFile = `[name-sample].json`;


/**
 * @return {Array} Json data of all contributors
 */
const readAllTheJsonFiles = () => {

  // file directory to all json files
  const jsonFileDirectory = path.join(process.cwd(), jsonFilePath);

  // check all the available files on given directory
  const filenames  = fs.readdirSync(jsonFileDirectory);

  // read all the available files and return it as JSON Array
  return filenames.filter(filename => filename !== sampleJsonFile)
    .map(filename => {

    // path of each file
    const filePath = path.join(jsonFileDirectory, filename);

    // reading the content 
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // parsing the actual JSON Data
    return JSON.parse(fileContents)

  });

}


const plainData = readAllTheJsonFiles();


export default plainData;