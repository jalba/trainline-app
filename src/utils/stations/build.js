const csvFilePath = './station_codes.csv';
const csv = require('csvtojson');
const fs = require('fs');
const jsonContent = {};
csv()
  .fromFile(csvFilePath)
  .on('json',(jsonObj)=>{
    // combine csv header row and csv line to a json object
    // jsonObj.a ==> 1 or 4
    jsonContent[jsonObj['CRS Code']] = jsonObj['Station Name'];
   })
  .on('done',(error)=>{
    fs.writeFile('./stations.js', 'export default ' + JSON.stringify(jsonContent) + ';', (err) => {
      if (err) throw err;
      console.log('It\'s saved!');
    });
  });