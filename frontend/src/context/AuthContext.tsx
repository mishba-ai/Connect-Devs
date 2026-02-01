import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../api/axiosInstance";

interface AuthContextType {
    user: any;
    loading: boolean;
    checkAuth: () => Promise<void>;
}
interface AuthProviderProps {
    children: React.ReactNode;
}

const API_BASE_URL = import.meta.env.VITE_API_URL

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const checkAuth = async () => {
        try {
            const response = await api.get('/auth_receiver/');
            setUser(response.data);
        } catch (error) {
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    const handleGoogleLogin = () => {
        window.location.href = `${API_BASE_URL}/auth/google`
    }

    //logout
    const logout = async() => {
        try {
            await api.post('/auth/logout')
            setUser(null)
        } catch (error) {
            console.error('logout failed',error);
        }
    }

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{user,loading,checkAuth}} >
            {!loading && children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext)