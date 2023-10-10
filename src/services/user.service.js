import axios from 'axios'

export const search = async (search) => {
    const response = await axios.get(`https://crudnode-55p1-dev.fl0.io/api/search/${search}`)
    return response.data
}