import { Pattern } from './patterns'

export const PatternFactory = (pattern: Pattern): Pattern[] => {
  return Object.values(pattern).map((value, i) => ({
    a: value,
    b: value,
    c: value,
    d: value,
    single: true,
    id: pattern.id + i,
  }))
}
