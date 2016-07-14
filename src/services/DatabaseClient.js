/**
 * DatabaseClient
 *
 * @package predictabl-uranus
 * @author Daniel Waligora <daniel@playabl.com>
 */
class DatabaseClient {
  constructor (dbConnection, host, user, password, database, logger) {
    this.dbConnection = dbConnection
    this.client = 'mysql'
    this.host = host
    this.user = user
    this.password = password
    this.database = database
    this.logger = logger
  }

  connect () {
    const connection = this.dbConnection({
      client: this.client,
      connection: {
        host: this.host,
        user: this.user,
        password: this.password,
        database: this.database
      }
    })

    this._registerEvents(connection)
    return connection
  }

  /**
   * Registers db queries events for logging purpose
   *
   * @param {Object} connection
   * @private
   */
  _registerEvents (connection) {
    connection.on('query', (data) => {
      this.logger.info(
        `[${this.client.toUpperCase()}] [SQL]: ${data.sql}, ` +
        `params ${JSON.stringify(data.bindings)}`
      )
    })

    connection.on('query-error', (err) => {
      this.logger.error(
        `[${this.client.toUpperCase()}] [SQL Error]: ${err.message}`, err
      )
    })
  }
}

export default DatabaseClient
