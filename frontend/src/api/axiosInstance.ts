import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})


//add response interceptor to handle token refresh
api.interceptors.response.use(
    (response) => response,
    async (err) => {
        const originalRequest = err.config
        //if access token expired and we havent retired yet
        if (err.response?.status === 401 && !originalRequest._retry && !originalRequest.url.includes('auth/refresh/')) {
            originalRequest._retry = true
            try {
                //try to refresh the token
                await api.post('auth/refresh/')

                //retry the original request
                return api(originalRequest);
            } catch (error) {
                //refresh failed , redirect to login
                window.location.href = '/';
                return Promise.reject(error)
            }
        }
        return Promise.reject(err)
    }
)
export default api