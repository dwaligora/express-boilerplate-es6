/**
 * UserController
 *
 * @package express-boilerplate
 * @author Daniel Waligora <danielwaligora@gmail.com>
 */
class UserController {
  /**
   *
   * @param {Router} router
   * @param {userRepository
   */
  constructor (router, userRepository) {
    this.router = router
    this.userRepository = userRepository
  }

  /**
   * Retrieves single user details
   *
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   */
  get (req, res, next) {
    res.send(`Get User with id ${req.params.id}`)
  }

  /**
   * Lists all application users
   *
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   */
  list (req, res, next) {
    res.send('List Users')
  }

  /**
   * Configures controller routes
   *
   * @returns {Router}
   */
  configureRoutes () {
    this.router.get('/:id', this.get)
    this.router.get('/', this.list)

    return this.router
  }
}

export default UserController
