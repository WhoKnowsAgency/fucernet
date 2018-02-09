import axios from 'axios'

const BASE_URL = 'https://fucer.com.ar/app/api/'

export default {
  async getNormativasDestacadas() {
    const response = await axios.get(BASE_URL + 'normativas/destacadas')
    return response.data
  },
  async getNormativa(id) {
    const response = await axios.get(BASE_URL + 'normativas/id/' + id)
    return response.data
  }
}
