import axios from '../axios'

const fetchData = async endpoint => {
    const { data } = await axios.get(`/${endpoint}`)
    return data
}

export default fetchData