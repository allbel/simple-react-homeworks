import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
})

type ResponsePostType = {
    errorText: string
    info: string
    yourBody: {
        success: boolean
    }
    yourQuery: {}
}

export const requestsAPI = {
    create(success: boolean) {
        return instance.post<ResponsePostType>(`auth/test`, {success})
            .then(response => response.data)
    }
}