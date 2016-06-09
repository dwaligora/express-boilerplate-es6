/**
 * app
 *
 * @package api
 * @author Daniel Waligora <danielwaligora@gmail.com>
 *
 * Created at 09/06/16 00:33
 */

import express from 'express'
const app = express()

// sasa
app.get('/', (req, res) => {
  res.send('Hello!')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})