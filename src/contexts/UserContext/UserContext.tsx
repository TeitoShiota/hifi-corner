'use client';
import { createContext, useContext, useState } from 'react';

interface UserContextType {
    user: string | null;
    setUser: (user: string) => void;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<string | null>('teito');

    return (
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};

export function useUserContext() {
    return useContext(UserContext);
};