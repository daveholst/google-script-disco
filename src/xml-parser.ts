import { XMLParser, XMLBuilder, XMLValidator } from 'fast-xml-parser'
import * as fs from 'fs'

const parser = new XMLParser()

fs.readFile(
  './test/xml/aec-mediafeed-results-standard-verbose-24310.xml',
  (err, data) => {
    const parsedData = parser.parse(data)
    fs.writeFile('./testjson', JSON.stringify(parsedData, null, 2), () => {})
    console.log(JSON.stringify(parsedData, null, 2))
  }
)
