import { createContext, useState, useEffect, useContext } from "react";
import api from "../api/axiosInstance.ts";
import type { AuthContextType, User, AuthProviderProps } from "../types/index.ts";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const checkAuth = async () => {
        try {
            setLoading(true)
            // if refresh token 
            await api.post('/auth/refresh/')
            const userResponse = await api.get('/user/profile/')
            setUser(userResponse.data)
        } catch (error) {
            console.error(error);
            setUser(null);
        } finally {
            setLoading(false)
        }
    }

    // login
    const login = async (credential: string) => {
        try {
            const response = await api.post('/auth/google/', { credential })
            setUser(response.data.user)
            return response.data
        } catch (error) {
            console.error('login failed', error);
            throw error
        }
    }

    //logout
    const logout = async () => {
        try {
            await api.post('/auth/logout')
            setUser(null)
        } catch (error) {
            console.error('logout failed', error);
        } finally {
            setUser(null)
        }
    }

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, checkAuth, logout, login }} >
            {!loading && children}
        </AuthContext.Provider>
    )
}