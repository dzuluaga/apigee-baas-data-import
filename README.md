apigee-baas-data-import-DEPRECATED
=============================
**This import tool has been deprecated as BAAS API supports importing arrays. See addendum.**

This Node.js tool is meant to ease import of data into Apigee BaaS.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [apigee-baas-data-import](#apigee-baas-data-import)
      - [How to install it?](#how-to-install-it)
      - [How to import a file?](#how-to-import-a-file)
    - [Get help](#get-help)
      - [Hot to convert Excel or CSV files into JSON quickly?](#hot-to-convert-excel-or-csv-files-into-json-quickly)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


#### How to install it?
This command will install BaaS Data import and will be available from command line to be executed as a regular unix command.
```
sudo npm install apigee-baas-data-import -g
```

#### How to import a file?

```
abaasimport -f ./test/data.json -C testscoresimport -c {clientId} -s {secretBaaS} -O {org} -A {applicationName} -l -b
```

### Get help

```
$ abaasimport --help

  Usage: abaasimport [options]

  Options:

    -h, --help                             output usage information
    -V, --version                          output the version number
    -A, --appname [appName]                Apigee BaaS App Name in which data will be imported
    -b, --buildcurl                        build curl entries
    -c, --clientid [clientId]              Apigee BaaS ClientId
    -C, --collection [collectionName]      Apigee BaaS Collection in which data will be imported
    -f, --file [filePath]                  JSON Import array file
    -l, --logging                          generate logging http transaction entries from usergrid client
    -O, --organization [organizationName]  Apigee BaaS Organization in which data will be imported
    -s, --secret [secret]                  Apigee BaaS Secret
    -u, --uri [uri]                        Apigee BaaS URI including basepath
```

#### Hot to convert Excel or CSV files into JSON quickly?
in order to import data to BaaS required, it is required to conform with a valid JSON payload. You can leverage (Mr. Data Converter)[http://shancarter.github.io/mr-data-converter/] to tranform Excel into JSON.

#### Addendum - Import collections directly
```bash
curl -X POST http://api.usergrid.com/{org_name}/{app_name}/{collection} -H 'Content-Type: application/json' --data @restaurants.json

[
  {
    "restID": 1,
    "name": "Pomegranate Cafe",
    "address": "4025 E Chandler Blvd",
    "city": "Phoenix",
    "state": "AZ",
    "location": {
      "latitude": 33.3044612,
      "longitude": -111.9945753
    },
    "phone": "+1-480-706-7472",
    "category": "Coffee & Tea"
  },
  {
    "restID": 2,
    "name": "Los Taquitos",
    "address": "4747 E Elliot Rd",
    "city": "Phoenix",
    "state": "AZ",
    "location": {
      "latitude": 33.3480616,
      "longitude": -111.9820214
    },
    "phone": "+1-480-753-4370",
    "category": "Mexican"
  }
]
```
