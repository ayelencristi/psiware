import axios from 'axios'

const api = axios.create({
    baseURL: 'https://psiware-imc-default-rtdb.firebaseio.com/'
})

export { api }