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

  /**
   * Finds data by given criteria
   *
   * @returns {Promise}
   */
  find (criteria = {}) {
    let qb = this.dbClient
      .select('*')
      .from(this.dbTable)

    if (criteria) {
      qb.where(criteria)
    }

    return qb
  }

  /**
   * Stores data in db
   *
   * @param data
   * @returns {Promise}
   */
  save (data) {
    return new Promise((resolve, reject) => {
      if (!_.isObject(data)) {
        return reject(
          `Repository::save expect object as an argument. ${typeof data} given.`
        )
      }

      return this.dbClient(this.dbTable)
        .insert(data)
        .then(
          id => resolve(id),
          err => reject(err)
        )
    })
  }
}

export default AbstractRepository
