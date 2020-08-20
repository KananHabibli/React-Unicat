import axios from '../axios'

const fetchData = async endpoint => {
    const { data } = await axios.get(`/${endpoint}`)
    console.log(data)
    return data
}

export default fetchData