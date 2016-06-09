/**
 * AbstractRepository
 *
 * @package express-boilerplate
 * @author Daniel Waligora <danielwaligora@gmail.com>
 */
import _ from 'lodash'

/**
 * @class AbstractRepository
 */
class AbstractRepository {
  constructor (dbClient, dbTable) {
    this.dbClient = dbClient
    this.dbTable = dbTable
  }

  save (user) {
    return new Promise((resolve, reject) => {
      if (!_.isObject(user)) {
        reject(
          `Repository::save expect object as an argument. ${typeof user} given.`
        )
      }

      this.dbClient(this.dbTable)
        .insert(user)
        .then((id) => {
          return resolve(id)
        }, (err) => {
          return reject(err)
        })
    })
  }
}

export default AbstractRepository
