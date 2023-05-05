import axios from 'axios'

const getData = async (url) => {
  const res = await axios.get(url)
  return res.data.products
}

export default getData