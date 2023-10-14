import axios from 'axios'

export const search = async (search) => {
    const response = await axios.get(`https://crudnode-production.up.railway.app/api/search/${search}`)
    return response.data
}