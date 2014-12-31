#!/usr/bin/env node

var program = require('commander');
var usergrid = require('usergrid');
var helper = require('../lib/helper');

program
  .version('0.0.1')
  .option('-A, --appname [appName]', 'Apigee BaaS App Name in which data will be imported')
  .option('-b, --buildcurl', 'build curl entries')
  .option('-c, --clientid [clientId]', 'Apigee BaaS ClientId')
  .option('-C, --collection [collectionName]', 'Apigee BaaS Collection in which data will be imported')
  .option('-f, --file [filePath]', 'JSON Import array file', './test/data.json')
  .option('-l, --logging', 'generate logging http transaction entries from usergrid client')
  .option('-O, --organization [organizationName]', 'Apigee BaaS Organization in which data will be imported')
  .option('-s, --secret [secret]', 'Apigee BaaS Secret')
  .parse(process.argv);

console.log('you executed a BaaS import with:');
if (program.file) console.log(program.file + '  - file');
if (program.clientid) console.log(program.clientid + '  - clientid');
if (program.secret) console.log(program.secret +'  - secret');
console.log('  - %s cheese', program.collection);

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync(program.file, 'utf8'));

var client = new usergrid.client({
    orgName: program.organization,//'MY_ORG1',
    appName: program.appname, //'INSIGHTSDEMO',
    authType: usergrid.AUTH_CLIENT_ID,
    clientId: program.clientid,
    clientSecret: program.secret,
    logging: program.logging, //optional - turn on logging, off by default
    buildCurl: program.buildcurl //optional - turn on curl commands, off by default
});

// //options object needs to have the type (which is the collection type)
// var options = {
//     type: program.collection,
//     qs:{/*ql:'order by index'*/ limit : 1}
// }

// client.createCollection(options, function (err, dogs) {
//     if (err) {
//         //error - could not make collection
//     } else {

//         //success - new Collection worked

//         //we got the dogs, now display the Entities:
//         //console.log(dogs)
//         //console.log(dogs.hasPreviousPage())
//         //console.log(dogs)
//         while(dogs.hasNextEntity()) {
//             //get a reference to the dog
//             dog = dogs.getNextEntity();
//             //console.log(dog)
//             var name = dog.get('userId');
//             //notice('dog is called ' + name);
//             //console.log('dog is called ' + name);
//         }

//         //success - looped through dogs

//     }
// });

helper.createEntities(program.collection, obj.entities, client);