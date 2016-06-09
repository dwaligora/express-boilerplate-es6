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
   * @inheritDoc
   *
   * @param {Object} user
   */
  save (user) {
    user.updated_at = Date.now()
    user.created_at = Date.now()

    return super.save(user)
  }
}

export default UserRepository
