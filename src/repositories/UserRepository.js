/**
 * UserRepository
 *
 * @package express-boilerplate
 * @author Daniel Waligora <danielwaligora@gmail.com>
 *
 * Created at 09/06/16 20:54
 */
import AbstractRepository from './AbstractRepository'

/**
 * @class UserRepository
 */
class UserRepository extends AbstractRepository {
  constructor (dbClient) {
    const dbTable = 'users'
    super(dbClient, dbTable)

    this.dbTable = dbTable
  }

  /**
   * Finds single user by given criteria
   *
   * @param {object} criteria
   * @returns {Promise}
   */
  findOneBy (criteria) {
    return super.find(criteria).then(users => {
      if (users.length) {
        return users[0]
      }

      return null
    })
  }

  /**
   * @inheritDoc
   *
   * @param {Object} user
   * @returns {Promise}
   */
  save (user) {
    user.updated_at = Date.now()
    user.created_at = Date.now()

    return super.save(user)
  }
}

export default UserRepository
