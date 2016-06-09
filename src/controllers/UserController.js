/**
 * UserController
 *
 * @package express-boilerplate
 * @author Daniel Waligora <danielwaligora@gmail.com>
 */
import { HTTP_STATUS } from './../constants/http'

class UserController {
  /**
   * @constructor
   *
   * @param {Router} router
   * @param {UserRepository} userRepository
   * @param {Object} paramConverter
   */
  constructor (router, userRepository, paramConverter) {
    this.router = router
    this.userRepository = userRepository
    this.paramConverter = paramConverter

    // set method context
    this.configureRoutes.bind(this)
    this.create.bind(this)
    this.get.bind(this)
    this.list.bind(this)
  }

  /**
   * Created User
   *
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   */
  create (req, res, next) {
    console.log('this', this)
    this.userRepository.save({
      name: 'test',
      email: 'test@email.com'
    }).then((id) => {
      res
        .status(HTTP_STATUS.CREATED)
        .send({message: `Creating user ${id}`})
    })
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
    this.router.post('/', this.create)

    this.router.get(
      '/:id',
      this.paramConverter.findById(this.userRepository),
      this.get
    )

    this.router.get('/', this.list)

    return this.router
  }
}

export default UserController
