// var resolve = require('resolve')
// var path = require('path')

exports.resolve = function (source, file, config) {
  // FIXME: ignoring any resolve errors
  return { found: true, path: null }

  // const root = path.resolve(__dirname) + '/'
  // const clientDir = path.resolve(root, 'client') + '/'
  // source = source.replace('~', root)
  // source = source.replace('@', clientDir)

  // if (resolve.isCore(source)) return { found: true, path: null }
  // try {
  //   return { found: true, path: resolve.sync(source, opts(file, config)) }
  // } catch (err) {
  //   return { found: false }
  // }
}
