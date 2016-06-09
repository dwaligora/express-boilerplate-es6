/**
 * main
 *
 * @author Daniel Waligora <danielwaligora@gmail.com>
 *
 * Created at 09/06/16 00:43
 */
import express from 'express'

import di from './src/di'
import configLoader from './src/configLoader'
import App from './src/App'

const config = configLoader()

export const startHttpServer = () => {
  const app = new App(config, di, express())
  app.startHttpServer()
    .then(null, (err) => {
      di.logger.error(err)
      throw err
    })
}
