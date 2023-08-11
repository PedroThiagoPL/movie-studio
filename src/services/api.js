import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key:'89a7c6e47f2020290b4fd40b870df199',
        language: 'pt-BR',
        page: 1
    }
})

export default api




