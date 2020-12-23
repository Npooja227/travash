import Data from '../js/data'

const url = 'https://pixabay.com/api/?key=19621599-5d12901cad10a29b2308a5036&image_type=photo&pretty=true'

class Album extends Data {
  constructor () {
    super(url)
  }

  get (params) {
    console.log(params)
    if (params.trim().length > 0) params = params.replace(' ', '+')
    let data = super.get(`&q=${params}`)
    return data
  }
}

export default new Album()
