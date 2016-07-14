/**
 * main
 *
 * Application entry point for different connection interfaces like:
 * - web server
 * - command line application
 *
 * @author Daniel Waligora <daniel@playabl.com>
 *
 * Created at 09/06/16 00:43
 */
import express from 'express'

import di from './src/di'
import configLoader from './src/configLoader'
import routingLoader from './src/controllers/routingLoader'
import middlewareLoader from './src/middlewares/middlewareLoader'
import App from './src/App'

const config = configLoader()

export const startHttpServer = () => {
  const app = new App(config, di, express(), routingLoader, middlewareLoader)
  app.startHttpServer()
    .then(null, (err) => {
      di.logger.error(err)
      throw err
    })
}
