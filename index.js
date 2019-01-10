// JSON source
const jsonPath = './db.json'
const jsonEncoding = 'utf8'

// Required modules
const express = require('express')
const jsonGraphqlExpress = require('json-graphql-server').default
const fs = require('fs')

// Read source file
fs.readFile(jsonPath, jsonEncoding, (err, raw) => {
	if (err) throw err
	// Node has never heard about the BOM m(
	const json = JSON.parse(raw.replace(/^\uFEFF/, ''))
	// Wrap JSON array into plain object if necessary
	const data = Array.isArray(json)? {items: json} : json

	// Start server
	const app = express()
	app.use('/graphql', jsonGraphqlExpress(data))
	app.listen(3000)
	console.log('GraphQL API running on localhost:3000/graphql')
})
