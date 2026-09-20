import axios from "axios"

const BaseUrl = import.meta.env.PROD ? import.meta.env.VITE_PROD_API_URL : import.meta.env.VITE_DEV_API_URL

const api = axios.create({
    baseURL: BaseUrl,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})
let refreshPromise: Promise<any> | null = null;

api.interceptors.response.use(
    (response) => response,
    async (err) => {
        const originalRequest = err.config
        //check if the failed request itself was the refresh endpoint
        const isRefreshRequest = originalRequest.url?.includes('auth/refresh/')

        //if access token expired and we havent retired yet
        if (err.response?.status === 401 && !originalRequest._retry && !isRefreshRequest) {
            originalRequest._retry = true
            try {
                //dedupe : if a refresh is already in flight, wait on it instead of starting a new one
                //try to refresh the token 
                if (!refreshPromise) {
                    refreshPromise = api.post('auth/refresh/').finally(() => {
                        refreshPromise = null;
                    });
                }
                await refreshPromise
                // retry the original request
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