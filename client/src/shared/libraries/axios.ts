import axios from 'axios'

export const requester = axios.create({
    baseURL: 'http://localhost:8080/api/'
})

// eslint-disable-next-line
export const axiosErrorHandler = (error: any, withoutPromise: boolean = false) => {
    if (error instanceof Error) {
        return withoutPromise
            ? error.message
            : Promise.reject(error.message)
    }
    else {
        return withoutPromise
            ? error
            : Promise.reject(`unknown error: ${error}`)
    }
}