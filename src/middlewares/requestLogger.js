/**
 * requestLogger
 *
 * @package express-boilerplate
 * @author Daniel Waligora <danielwaligora@gmail.com>
 */
const requestLogger = (di) => {
  return (req, res, next) => {
    const logData = {
      http_method: req.method,
      requested_host: req.headers.host,
      requested_url: req.originalUrl
    }

    di.logger.info(
      `Received ${logData.http_method} ` +
      `http://${logData.requested_host}${logData.requested_url}`,
      logData
    )

    next()
  }
}

export default requestLogger
