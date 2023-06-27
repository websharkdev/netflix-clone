const getOnlyText = (_string: string, limit: null | number = null): string => {
  const result = _string
    .replace(/<[^>]+>/g, '')
    .replace(/&[^;]+./g, ' ')
    .replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|[\uDD10-\uDDFF])/g,
      ''
    )

  if (limit) return `${result.slice(0, limit)}...`

  return result
}

export default getOnlyText
