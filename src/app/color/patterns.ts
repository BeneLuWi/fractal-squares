export interface Pattern {
  a: { color: string }
  b: { color: string }
  c: { color: string }
  d: { color: string }
  single?: boolean
  id: string
}

export const DefaultPatterns: Pattern[] = [
  { id: 'green', a: { color: '#265728' }, b: { color: '#357a38' }, c: { color: '#459c48' }, d: { color: '#93cf95' } },
  { id: 'orange', a: { color: '#b36b00' }, b: { color: '#e68a00' }, c: { color: '#ffc266' }, d: { color: '#ffebcc' } },
  { id: 'khaki', a: { color: '#cbb91a' }, b: { color: '#e8d84a' }, c: { color: '#f3eba5' }, d: { color: '#f9f5d2' } },
  { id: 'purple', a: { color: '#3e236d' }, b: { color: '#532e92' }, c: { color: '#845bcb' }, d: { color: '#c1ade5' } },
  {
    id: 'mono-green1',
    a: { color: '#265728' },
    b: { color: '#265728' },
    c: { color: '#265728' },
    d: { color: '#265728' },
    single: true,
  },
  {
    id: 'mono-green2',
    a: { color: '#357a38' },
    b: { color: '#357a38' },
    c: { color: '#357a38' },
    d: { color: '#357a38' },
    single: true,
  },
  {
    id: 'mono-green3',
    a: { color: '#459c48' },
    b: { color: '#459c48' },
    c: { color: '#459c48' },
    d: { color: '#459c48' },
    single: true,
  },
  {
    id: 'mono-green4',
    a: { color: '#93cf95' },
    b: { color: '#93cf95' },
    c: { color: '#93cf95' },
    d: { color: '#93cf95' },
    single: true,
  },
]
