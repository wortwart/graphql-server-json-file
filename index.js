// JSON source
const jsonPath = './db.json'

// Required modules
const express = require('express')
const jsonGraphqlExpress = require('json-graphql-server').default
const fs = require('fs')

// Read source file
const json = require(jsonPath)
// Wrap JSON array into plain object if necessary
const data = Array.isArray(json)? {items: json} : json

// Start server
const app = express()
app.use('/graphql', jsonGraphqlExpress(data))
app.listen(3000)
console.log('GraphQL API running on localhost:3000/graphql')
