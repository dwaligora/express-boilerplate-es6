/**
 * Dependency Injection container
 *
 * @author Daniel Waligora <danielwaligora@gmail.com>
 *
 * Created at 09/06/16 00:20
 */
import moment from 'moment'
import Config from './../resources/config/parameters'

/*
 * configure application logger service
 */
import winston from 'winston'
import Logger from './services/Logger'

const options = {
  timestamp: () => {
    return moment().format(Config.logger.dateFormat)
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
      filename: Config.logger.directory + '/info.log',
      level: 'info',
      ...commonConfig
    })
  )
  transports.push(
    new (winston.transports.File)({
      name: 'error',
      filename: Config.logger.directory + '/error.log',
      level: 'error',
      ...commonConfig
    })
  )
}

export const logger = new Logger(
  new (winston.Logger)({
    transports: transports
  }),
  {
    dateFormat: Config.logger.dateFormat,
    processName: Config.process.name
  }
)
