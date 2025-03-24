import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User as FirebaseUser } from 'firebase/auth';
import firebase from '@/services/firebase';

// Define types for the context
interface AuthContextType {
    currentUser: FirebaseUser | null;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<any>;
    signUp: (email: string, password: string) => Promise<any>;
    signInWithGoogle: () => Promise<any>;
    logOut: () => Promise<void>;
    resetPassword: (email: string) => Promise<void>;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | null>(null);

// Hook to use the auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

// Props for the provider component
interface AuthProviderProps {
    children: ReactNode;
}

// Provider component that wraps the app and makes auth object available
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Sign in with email and password
    const signIn = (email: string, password: string) => {
        return firebase.signInWithEmail(email, password);
    };

    // Sign up with email and password
    const signUp = (email: string, password: string) => {
        return firebase.signUpWithEmail(email, password);
    };

    // Sign in with Google
    const signInWithGoogle = () => {
        return firebase.signInWithGoogle();
    };

    // Log out
    const logOut = () => {
        return firebase.logOut();
    };

    // Reset password
    const resetPassword = (email: string) => {
        return firebase.resetPassword(email);
    };

    // Set up an observer to watch for auth state changes
    useEffect(() => {
        const unsubscribe = firebase.onUserAuthChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        // Clean up subscription on unmount
        return unsubscribe;
    }, []);

    // Create value object with all auth methods and state
    const value = {
        currentUser,
        loading,
        signIn,
        signUp,
        signInWithGoogle,
        logOut,
        resetPassword
    };

    return (
        <AuthContext.Provider value={value}>
            {/* Only render children when not in initial loading state, to prevent flashing */}
            {!loading ? children : <div>Loading...</div>}
        </AuthContext.Provider>
    );
};

export default AuthContext; 