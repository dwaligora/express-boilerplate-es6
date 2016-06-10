/**
 * user param converter middleware
 *
 * @package express-boilerplate
 * @author Daniel Waligora <danielwaligora@gmail.com>
 */
import { HTTP_STATUS } from './../../constants/http'

/**
 * Conver
 * @param userRepository
 * @returns {Function}
 */
const findById = (userRepository) => {
  return (req, res, next) => {
    if (!req.params.hasOwnProperty('id') && !req.body.hasOwnProperty('id')) {
      return res.status(HTTP_STATUS.BAD_REQUEST).send()
    }

    next()
  }
}

export default {
  findById: findById
}
