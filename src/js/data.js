const axios = require('axios')

export default class Data {
  constructor (url) {
    this.url = url
  }

  async get (params) {
    if (params) this.url += params
    let result = await axios.get(this.url)
    return result.data
  }
}
