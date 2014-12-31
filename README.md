apigee-baas-data-import
=======================

This Node.js tool is meant to ease import of data into Apigee BaaS.

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
```