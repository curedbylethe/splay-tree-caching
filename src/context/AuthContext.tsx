import {auth} from "@/firebase/config";
import {createContext, useContext, useEffect, useState} from "react";
import {onAuthStateChanged, User as FirebaseUser} from "@firebase/auth";

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);


type AuthProviderProps = {
    children: React.ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps) => {
    const [user, setUser] = useState<FirebaseUser | null>(null);
    const [loading, setLoading] = useState<Boolean>(true);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{user}}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );

};
