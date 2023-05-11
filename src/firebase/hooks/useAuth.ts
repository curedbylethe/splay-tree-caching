import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

type User = firebase.User | null;

export const useAuth = () => {
    const [user, setUser] = useState<User>(null);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    return user;
};
