import axios from "axios"

const http = () => {
    const options = {
        baseURL: 'http://ride-share.test',
        headers: {}
    }

    if (localStorage.getItem('token')) {
        options.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }

    return axios.create(options)
}

export default http
