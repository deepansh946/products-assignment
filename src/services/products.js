import axios from 'axios'

export const getProducts = async () => {
  try {
    const { data } = await axios.get('/api/products')

    return data
  } catch (error) {
    console.error('Error', error)
    throw error
  }
}
