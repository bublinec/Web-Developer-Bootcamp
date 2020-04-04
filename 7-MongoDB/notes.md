# DATABASES
- store data && have interface for comunicating with them (code)

- relational (SQL) - tyipical, wastely used, more complex
- non-relational (nonSQL) - more flexible, easier, use jso natation
 
## MonogDB
- most popular nonSQL db

Commands:
* mongod - run background service
* mongo  - open shell 
* show dbs - show all local dbs (doesn't show empty)
* use db_name - choose the db for using 
* show collections - eqivalent to table (objects are stored in collections)
* help - help

Quering commands:
* insert
* find - if no argument - show everything
* update - use atr {$set: {name: "Peter"}} to not overwrite
* remove

### Mongoose 
- node package (install using npm - node package manager)
- ODM - object data modeling library
- js layer on the top of mongoDb
- used to interact with mongoDb + other usefull features (validation etc)

## Data associations (in a nonSQL db)

- one:one
- one:many
- many:many

* embedded data - one attribtue of a schema  is an array of schemas/models 
* referenced objects - one attribute of a schema is an id of models

