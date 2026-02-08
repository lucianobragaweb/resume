const { alias } = require('react-app-rewire-alias')

function excludeLucideSourceMaps(config) {
  const rules = config.module && config.module.rules
  if (!rules) return config

  const sourceMapRule = rules.find(
    (rule) =>
      rule &&
      rule.enforce === 'pre' &&
      rule.use &&
      rule.use.some((useEntry) =>
        typeof useEntry === 'string'
          ? useEntry.includes('source-map-loader')
          : useEntry.loader && useEntry.loader.includes('source-map-loader')
      )
  )

  if (sourceMapRule) {
    const lucideRegex = /node_modules\/lucide-react/
    if (Array.isArray(sourceMapRule.exclude)) {
      sourceMapRule.exclude.push(lucideRegex)
    } else if (sourceMapRule.exclude) {
      sourceMapRule.exclude = [sourceMapRule.exclude, lucideRegex]
    } else {
      sourceMapRule.exclude = lucideRegex
    }
  }

  return config
}

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@assets' : 'src/assets',
    '@content' : 'src/content'
  })(config)

  return excludeLucideSourceMaps(config)
}
