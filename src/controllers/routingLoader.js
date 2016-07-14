/**
 * routingLoader
 *
 * @package predictabl-uranus
 * @author Daniel Waligora <daniel@playabl.com>
 *
 * Created at 09/06/16 18:46
 */

/**
 * Loads application controllers and mounts them to the application router
 */
const routingLoader = (httpServer, di) => {
  httpServer.use('/users', di.userController.configureRoutes())
}

export default routingLoader
