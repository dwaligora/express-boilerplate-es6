/**
 * UserController
 *
 * @package express-boilerplate
 * @author Daniel Waligora <danielwaligora@gmail.com>
 */
import { HTTP_STATUS } from './../constants/http'

/**
 * @class UserController
 */
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
  }

  /**
   * Created User
   *
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   */
  create (req, res, next) {
    this.userRepository.save({
      name: 'test',
      email: 'test@email2wwww.com'
    }).then((id) => {
      res
        .status(HTTP_STATUS.CREATED)
        .send({user: `Creating user ${id}`})
    }, (err) => {
      res
        .status(HTTP_STATUS.SERVER_ERROR)
        .send({msg: err.message})
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
    this.userRepository.find()
      .then((userCollection) => {
        res
          .status(HTTP_STATUS.CREATED)
          .send({users: userCollection})
      }, (err) => {
        res
          .status(HTTP_STATUS.SERVER_ERROR)
          .send({})
      })
  }

  /**
   * Configures controller routes
   *
   * @returns {Router}
   */
  configureRoutes () {
    this.router.post('/', this.create.bind(this))

    this.router.get(
      '/:id',
      this.paramConverter.findById(this.userRepository),
      this.get.bind(this)
    )

    this.router.get('/', this.list.bind(this))

    return this.router
  }
}

export default UserController
