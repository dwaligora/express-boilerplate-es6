/**
 * app
 *
 * @package api
 * @author Daniel Waligora <danielwaligora@gmail.com>
 *
 * Created at 09/06/16 00:33
 */

import express from 'express'
import { logger } from './src/di'
import Config from './resources/config/parameters'

const app = express()

// sasa
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(Config.process.port, () => {
  logger.info('Boilerplate app listening on port: ' + Config.process.port)
})