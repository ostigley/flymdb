var request = require('request')

module.exports = function (uri) {
  return new Promise(function (resolve, reject) {
    request(uri, function (error, response, body) {
      if (error) {
        reject(error)
      } else {
        resolve(body)
      }
    })
  })
}


