import axios from "axios";
import { BASEURL, PLACESEARCH } from './AppConstrains'


export const placeSearch = async (params) => {
    const res = await axios.get(`${BASEURL}${PLACESEARCH}`)

    res.data = JSON.stringify()
    console.log(res.data)
    
    if (!!res.status && res.status === 200){
        return res.data;
    } else {
        throw new Error('Error');
    }
}