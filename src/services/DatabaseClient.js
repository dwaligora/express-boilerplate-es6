/**
 * DatabaseClient
 *
 * @package express-boilerplate
 * @author Daniel Waligora <danielwaligora@gmail.com>
 */
class DatabaseClient {
  constructor (dbConnection, host, user, password, database) {
    this.dbConnection = dbConnection
    this.client = 'mysql'
    this.host = host
    this.user = user
    this.password = password
    this.database = database
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

    connection.on('query', (data) => {
      console.log('QUERY', data)
    })

    connection.on('query-errpr', (data) => {
      console.log('QUERY-ERROR', data)
    })

    return connection
  }
}

export default DatabaseClient
