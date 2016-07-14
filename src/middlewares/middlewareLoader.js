/**
 * middlewareLoader
 *
 * @package predictabl-uranus
 * @author Daniel Waligora <daniel@playabl.com>
 */
import bodyParser from 'body-parser'
import requestLogger from './requestLogger'

const beforeRouting = (httpServer, di) => {
  httpServer
    .use(bodyParser.json())
    .use((req, res, next) => {
      res.set('Content-Type', 'application/json')
      return next()
    })
    .use(requestLogger(di))
}

export default {
  beforeRouting: beforeRouting
}
