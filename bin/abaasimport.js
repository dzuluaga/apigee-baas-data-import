#!/usr/bin/env node

var program = require('commander');
var usergrid = require('usergrid');
var helper = require('../lib/helper');

program
  .version('0.0.3')
  .option('-A, --appname [appName]', 'Apigee BaaS App Name in which data will be imported')
  .option('-b, --buildcurl', 'build curl entries')
  .option('-c, --clientid [clientId]', 'Apigee BaaS ClientId')
  .option('-C, --collection [collectionName]', 'Apigee BaaS Collection in which data will be imported')
  .option('-f, --file [filePath]', 'JSON Import array file', './test/data.json')
  .option('-l, --logging', 'generate logging http transaction entries from usergrid client')
  .option('-O, --organization [organizationName]', 'Apigee BaaS Organization in which data will be imported')
  .option('-s, --secret [secret]', 'Apigee BaaS Secret')
  .option('-u, --uri [uri]', 'Apigee BaaS URI including basepath')
  .parse(process.argv);

console.log('you executed a BaaS import with:');
if (program.file) console.log(program.file + '  - file');
if (program.clientid) console.log(program.clientid + '  - clientid');
if (program.secret) console.log(program.secret +'  - secret');
if (program.uri) console.log(program.uri +'  - uri');


var fs = require('fs');
var obj = JSON.parse(fs.readFileSync(program.file, 'utf8'));

var client = new usergrid.client({
    URI: program.uri || 'https://api.usergrid.com',
    orgName: program.organization,//'MY_ORG1',
    appName: program.appname, //'INSIGHTSDEMO',
    authType: usergrid.AUTH_CLIENT_ID,
    clientId: program.clientid,
    clientSecret: program.secret,
    logging: program.logging, //optional - turn on logging, off by default
    buildCurl: program.buildcurl //optional - turn on curl commands, off by default
});

helper.createEntities(program.collection, obj.entities, client);