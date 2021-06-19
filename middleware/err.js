/**
 * 错误处理 404
 */

module.exports = function(app) {
  app.use((req, res, next) => {
    let err = new Error('走丢了~')
    err.status = 404
    next(err)
  })
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send(err.message)
  })
}