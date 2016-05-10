var request = require('superagent')

module.exports = function (uri) {
  return new Promise(function (resolve, reject) {

    request
      .get(uri)
      .end(function (err, res) {
        if (err) {
          reject(err)
        } else {
          resolve(res.text)
        }
      })
  })
}
