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
   */
  constructor (config, di, httpServer) {
    this.config = config
    this.di = di
    this.httpServer = httpServer
  }

  /**
   * Starts application http server
   *
   * @returns {Promise}
   */
  startHttpServer () {
    this.di.logger.info(
      'Bootstrapping the http server with configuration:', this.config
    )

    return new Promise((resolve, reject) => {
      this.httpServer.listen(this.config.process.port, (err) => {
        if (err) {
          return reject(err)
        }

        this.di.logger.info(
          `Starting http server on port ${this.config.process.port}`
        )

        return resolve()
      })
    })
  }
}

export default App
