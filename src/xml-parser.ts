import { decodeXML } from 'entities'
import { Parser } from 'xml2js'
import { firstCharLowerCase } from 'xml2js/lib/processors.js'
import { ParserOptions } from 'xml2js'
import { removePrefix } from './normalize.js'

const options: ParserOptions = {
  trim: true,
  explicitArray: false,
  emptyTag: undefined,
  tagNameProcessors: [removePrefix('praw_'), firstCharLowerCase],
}

const parser = new Parser(options)

export async function xml2json(xml: string) {
  return parser.parseStringPromise(decodeXML(xml))
}
