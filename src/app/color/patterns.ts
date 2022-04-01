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
  { id: 'cyan', a: { color: '#007281' }, b: { color: '#0097ab' }, c: { color: '#12e3ff' }, d: { color: '#89f1ff' } },
  { id: 'grey', a: { color: '#5f5f5f' }, b: { color: '#7e7e7e' }, c: { color: '#b1b1b1' }, d: { color: '#d8d8d8' } },
  { id: 'teal', a: { color: '#005950' }, b: { color: '#00766a' }, c: { color: '#00dcc6' }, d: { color: '#6efff1' } },
  { id: 'pink', a: { color: '#910e3a' }, b: { color: '#c1134d' }, c: { color: '#ed4d82' }, d: { color: '#f6a6c1' } },
  { id: 'blue', a: { color: '#085a9d' }, b: { color: '#0b78d1' }, c: { color: '#4daaf6' }, d: { color: '#a6d4fa' } },
  { id: 'indigo', a: { color: '#26316d' }, b: { color: '#334191' }, c: { color: '#6271c8' }, d: { color: '#b1b8e3' } },
  {
    id: 'deep-orange',
    a: { color: '#ae2900' },
    b: { color: '#e93600' },
    c: { color: '#ff7850' },
    d: { color: '#ffbca7' },
  },
]
