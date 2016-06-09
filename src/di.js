/**
 * Dependency Injection container
 *
 * @author Daniel Waligora <danielwaligora@gmail.com>
 *
 * Created at 09/06/16 00:20
 */
import moment from 'moment'
import configLoader from './configLoader'

const config = configLoader()
const DIContainer = {}

/*
 * configure application logger service
 */
import winston from 'winston'
import Logger from './services/Logger'

const options = {
  timestamp: () => {
    return moment().format(config.logger.dateFormat)
  }
}

let transports = [
  new (winston.transports.Console)({
    ...options,
    json: false,
    colorize: true
  })
]

// for production lets disable console logging (due to its sync type)
// and enable async file logging
if (process.env.NODE_ENV === 'production') {
  transports = []

  const commonConfig = {
    ...options,
    json: true,
    maxsize: 5242880,
    maxFiles: 5
  }

  transports.push(
    new (winston.transports.File)({
      name: 'info',
      filename: config.logger.directory + '/info.log',
      level: 'info',
      ...commonConfig
    })
  )
  transports.push(
    new (winston.transports.File)({
      name: 'error',
      filename: config.logger.directory + '/error.log',
      level: 'error',
      ...commonConfig
    })
  )
}

DIContainer.logger = new Logger(
  new (winston.Logger)({
    transports: transports
  }),
  {
    dateFormat: config.logger.dateFormat,
    processName: config.process.name
  }
)

export default DIContainer
