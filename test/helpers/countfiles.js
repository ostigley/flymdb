var fs = require('fs')

function countFiles (path) {
	return fs.readdirSync(path).length
}
module.exports = countFiles


