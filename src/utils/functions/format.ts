export function prettyObject(msg: any) {
  const obj = msg
  if (typeof msg !== 'string') {
    msg = JSON.stringify(msg, null, '  ')
  }
  if (msg === '{}') {
    return obj.toString()
  }
  return ['```json', msg, '```'].join('\n')
}

export function formatDate(d: Date) {
  return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d
    .getDate()
    .toString()
    .padStart(2, '0')}`
}
