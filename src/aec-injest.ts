// TODO download the zip - hardcoded.. will need a lookup and sort algo :/

import * as ftp from 'ftp'

function listItems() {
  var c = new ftp.Client()
  c.on('ready', function () {
    c.list(function (err, list) {
      if (err) throw err
      Logger.log(list)
      c.end()
    })
  })
  // connect to localhost:21 as anonymous
  c.connect({
    host: 'mediafeedarchive.aec.gov.au/24310/Standard/Verbose/',
  })
}
