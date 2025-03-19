const PREFIX = process.env.NEXT_PUBLIC_BASE_PATH || ''

// 处理资源路径
const withPrefix = (path) => {
  if (!path) return path
  if (path.startsWith('http') || path.startsWith('//')) return path
  if (!PREFIX) return path.startsWith('/') ? path : `/${path}`
  if (path.startsWith(PREFIX)) return path
  return `${PREFIX}${path.startsWith('/') ? path : `/${path}`}`
}

module.exports = {
  PREFIX,
  withPrefix,
}
