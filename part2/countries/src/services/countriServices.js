import axios from "axios";

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/';

const getAll = () => {
    const url = `${baseUrl}/api/all`;
    const request = axios.get(url)
    return request.then(
        res => res.data
    )
}

export default {getAll};
