export interface User{
    id: string;
    email: string;
    full_name: string;
    profile_picture: string;
    date_joined: string;
}

export interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (credential: string) => Promise<void>;
    logout: () => Promise<void>;
    checkAuth: () => Promise<void>;
}

export interface AuthProviderProps{
    children:React.ReactNode;
}
