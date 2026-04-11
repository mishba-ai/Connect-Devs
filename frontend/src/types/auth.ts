export interface User{
    id: string;
    email: string;
    full_name: string;
    profile_picture: string;
    date_joined: string;
    projects?:string[]
    profile: {
    bio: string
    skills: string[]
    github_url: string
    linkedin_url: string
    twitter_url: string
    website_url: string
  } | null
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
