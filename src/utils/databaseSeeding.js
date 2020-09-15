import axios from 'axios'
import instance from '../axios'
const seeding = async () => {
    let {data} = await axios.get('https://restcountries.eu/rest/v2/all')
    console.log(data)
    for (let index = 101; index <= 150; index++) {
        let obj = {id: index, name: data[index-1].name, capital:  data[index-1].capital }
        await instance.post('countries', obj)
        
    }
}

export default seeding