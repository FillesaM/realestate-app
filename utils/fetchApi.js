import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const {data }= await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '7f4fe9a693msh323a75973fd8561p1a5aaajsn3b6b74b3f578'
        }
    })
    return data;
}