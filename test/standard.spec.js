/**
 * standard.spec.js
 *
 * @package api
 * @author Daniel Waligora <danielwaligora@gmail.com>
 *
 * Created at 09/06/16 00:28
 */
import standard from 'mocha-standard'

describe('coding style', () => {
  it('src conforms to standard', standard.files([
    'src/**/*.js'
  ]))
  it('tests conform to standard', standard.files([
    'test/**/*.js'
  ], {
    global: [
      'describe',
      'it',
      'before',
      'beforeEach',
      'after',
      'afterEach',
      'xdescribe',
      'xit'
    ]
  }))
})
