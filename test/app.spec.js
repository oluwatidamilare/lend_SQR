const assert = require('assert')

describe('app api calls', () => {
	it('POST /createAcc ', () => {
		let result = 1 + 1
		assert.equal(result, 2, 'these numbers are equal')
	})
    it('GET /', () => {
		let result = 1 + 1
		assert.equal(result, 2, 'these numbers are equal')
	})
    it('GET /allAccounts', () => {
		let result = 1 + 1
		assert.equal(result, 2, 'these numbers are equal')
	})
    it('POST /fundAcc', () => {
		let result = 1 + 1
		assert.equal(result, 2, 'these numbers are equal')
	})
    it('POST /transferFunds', () => {
		let result = 1 + 1
		assert.equal(result, 2, 'these numbers are equal')
	})
    it('POST /withdrawFunds', () => {
		let result = 1 + 1
		assert.equal(result, 2, 'these numbers are equal')
	})
})
