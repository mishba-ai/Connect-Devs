import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useAuth } from '../../hooks/useAuth.ts';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface GoogleLoginButtonProps {
    text?: string;
    onSuccess?: () => void;
}

const GoogleLoginbtn = ({ text = "Sign in", onSuccess }: GoogleLoginButtonProps) => {
    const { login, loading } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)

    const handleSuccess = async (credentialResponse: CredentialResponse) => {
        try {
            if (credentialResponse.credential) {
                await login(credentialResponse.credential);
                onSuccess?.();
                navigate('/home'); 
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert('Login failed. Please try again.');
        }
    };

    const handleError = () => {
        console.error('Google Login Failed');
        alert('Google login failed. Please try again.');
    };

    return (
        <div className='relative'>
            {/* hide the default button */}
            <div className='opacity-0 absolute inset-0 cursor-pointer'>
                <GoogleLogin onSuccess={handleSuccess} onError={() => alert('login failed')} width={224} />
            </div>
            <button
                disabled={isLoading}
                className="px-2 py-2 w-56 rounded-md hover:shadow-none transition-all hover:translate-x-[3px] border-black shadow-[4px_4px_0px_rgb(255,255,255)] hover:border hover:translate-y-[3px] font-Lexend font-semibold border-2 bg-tiltbtn text-black hover:bg-green"
            >
                <span>{isLoading ? 'Signing in...' : text}</span>
            </button>
        </div>
    );
};

export default GoogleLoginbtn;