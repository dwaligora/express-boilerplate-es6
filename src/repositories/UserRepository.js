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
    super(dbClient, 'users')
  }
}

export default UserRepository
