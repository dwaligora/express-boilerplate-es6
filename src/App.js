/**
 * bootstrap
 *
 * @package express-boilerplate
 * @author Daniel Waligora <danielwaligora@gmail.com>
 *
 * Created at 09/06/16 11:23
 */
class App {
  /**
   * @param {Object} config
   * @param {Object} di
   * @param {Object} httpServer
   * @param {Object} routingLoader
   * @param {Object} middlewareLoader
   */
  constructor (config, di, httpServer, routingLoader, middlewareLoader) {
    this.config = config
    this.di = di
    this.httpServer = httpServer
    this.routingLoader = routingLoader
    this.middlewareLoader = middlewareLoader
  }

  /**
   * Starts application http server
   *
   * @returns {Promise}
   */
  startHttpServer () {
    return new Promise((resolve, reject) => {
      this.di.logger.info(
        '[SERVER] Bootstrapping the http server with configuration:', this.config
      )

      // before middlewares
      this.middlewareLoader.beforeRouting(this.httpServer, this.di)

      // api router
      this.routingLoader(this.httpServer, this.di)

      this.httpServer.listen(this.config.process.port, (err) => {
        if (err) {
          return reject(err)
        }

        this.di.logger.info(
          `[SERVER] Starting http server on port ${this.config.process.port}`
        )

        return resolve()
      })
    })
  }
}

export default App
