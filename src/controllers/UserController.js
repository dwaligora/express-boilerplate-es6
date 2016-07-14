/**
 * UserController
 *
 * @package predictabl-uranus
 * @author Daniel Waligora <daniel@playabl.com>
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
   */
  create (req, res) {
    this.userRepository.save({
      name: 'test',
      email: 'test@email2wwww.com'
    }).then(id => {
      res
        .status(HTTP_STATUS.CREATED)
        .send({user: `Creating user ${id}`})
    }, err => {
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
   */
  get (req, res) {
    this.userRepository.findOneBy({id: req.params.id})
      .then(user => {
        if (user) {
          return res
            .status(HTTP_STATUS.OK)
            .send(user)
        }

        return res
          .status(HTTP_STATUS.NOT_FOUND)
          .send({msg: `User with id ${req.params.id} not found.`})
      }, err => {
        res
          .status(HTTP_STATUS.SERVER_ERROR)
          .send({msg: err.message})
      })
  }

  /**
   * Lists all application users
   *
   * @param {Request} req
   * @param {Response} res
   */
  list (req, res) {
    res
        .status(HTTP_STATUS.OK)
        .send({msg: 'All good.'})
    // this.userRepository.find()
    //   .then(userCollection => {
    //     res
    //       .status(HTTP_STATUS.OK)
    //       .send({users: userCollection})
    //   }, err => {
    //     res
    //       .status(HTTP_STATUS.SERVER_ERROR)
    //       .send({msg: err.message})
    //   })
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
      this.get.bind(this)
    )

    this.router.get('/', this.list.bind(this))

    return this.router
  }
}

export default UserController
