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


// function getpage (uri) {
//   return new Promise(function (resolve, reject) {
//     request({url: uri, followAllRedirects: true, jar: true}, function (error, response, body) {
//       if (error) {
//         reject(error)
//       } else {
//         console.log(response)
//         resolve(body)
//       }
//     })
//   })
// }
// getpage("http://www.singaporeair.com/en_UK/nz/flying-withus/entertainment/movies/")