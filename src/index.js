import {root} from './parser'

export default function parse(source) {
  return root.parse(String(source))
}
