/**
 * Logger
 *
 * @author Daniel Waligora <danielwaligora@gmail.com>
 *
 * Created at 09/06/16 00:20
 */
import _ from 'lodash'

/**
 * @class Logger
 */
class Logger {
  constructor (logger, baseConfig) {
    this.logger = logger
    this.baseConfig = baseConfig
  }

  /**
   * Extends last argument list
   *
   * @param {array|object} args
   * @param {object} extendData
   * @returns {array|object}
   * @private
   */
  _extendLastArgument (args, extendData) {
    const lastArgument = args[args.length - 1]

    if (_.isObject(lastArgument)) {
      args[args.length - 1] = { ...extendData, ...lastArgument }
    } else {
      args[args.length - 1] = { ...extendData, message: lastArgument }
    }

    return args
  }

  /**
   * Extends any log message by generic info
   *
   * @returns {{unix_timestamp: number, process_name: *, pid: (*|boolean)}}
   * @private
   */
  _getLogBasicInfo () {
    return {
      unix_timestamp: Date.now(),
      process_name: this.baseConfig.processName,
      pid: process.pid
    }
  }

  /**
   * Log LOG level messages
   */
  log () {
    const modifiedArgs = this._extendLastArgument(
      arguments,
      this._getLogBasicInfo()
    )

    this.logger.log.apply(this.logger, modifiedArgs)
  }

  /**
   * Log INFO level messages
   */
  info () {
    const modifiedArgs = this._extendLastArgument(
      arguments,
      this._getLogBasicInfo()
    )

    this.logger.info.apply(this.logger, modifiedArgs)
  }

  /**
   * Log ERROR level messages
   */
  error () {
    const modifiedArgs = this._extendLastArgument(
      arguments,
      this._getLogBasicInfo()
    )

    this.logger.error.apply(this.logger, modifiedArgs)
  }
}

export default Logger
