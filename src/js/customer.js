import Data from '../js/data'

const url = 'https://jsonplaceholder.typicode.com/users'

class Customer extends Data {
  constructor () {
    super(url)
  }
}

export default new Customer()
