import { Pattern } from './patterns'

export const PatternFactory = (pattern: Pattern): Pattern[] => {
  return Object.values(pattern)
    .filter((value) => value.color)
    .map((value, i) => ({
      a: value,
      b: value,
      c: value,
      d: value,
      single: true,
      id: pattern.id + i,
    }))
}
