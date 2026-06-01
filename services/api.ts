import axios from "axios";


export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.log("Token não encontrado");
            return config
        }
        config.headers.Authorization = `Bearer ${token}`
        return config
    }, (error) => {
        return Promise.reject(error)
    }
)

export const post = async <T>(url: string, body: unknown): Promise<T> => {
    const response = await api.post<T>(url, body)
    return response.data
}

export const get = async <T>(url: string): Promise<T> => {
    const response = await api.get<T>(url)
    return response.data
}

export const del = async <T>(url: string): Promise<T> => {
    const response = await api.delete<T>(url)
    return response.data
}


export const put = async <T>(url: string, body: unknown): Promise<T> => {
    const response = await api.put<T>(url, body)
    return response.data
}