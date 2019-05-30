const express = require('express')
const os = require('os')
const app = express()

app.get('/', function (req, res) {
	res.send('Hello World jinho ggoma samho ss from ' + os.hostname())
})

app.get('/healthcheck', function (req, res) {
	res.send('ok')
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})