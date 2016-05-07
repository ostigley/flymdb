var fs = require('fs')

function countFiles (path) {
	return fs.readdirSync(path).length
}


module.exports = countFiles


// function countFiles (path) {	fs.readdir(path, function(err, files) {		if (err) {			throw err;		}		return files.length;	})}