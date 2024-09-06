'use client';
import { createContext, useContext, useState } from 'react';

interface CompareListContextType {
    compareList: string[] | null;
    setCompareList: (compareList: string[]) => void;
    addToCompareList: (productId: string) => void;
    removeFromCompareList: (productId: string) => void;
    removeAllFromCompareList: () => void;
}

const CompareListContext = createContext<CompareListContextType | null>(null);

export const CompareListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [compareList, setCompareList] = useState<string[]>([]);

    function addToCompareList(productId: string) {
        setCompareList([...compareList, productId]);
        console.log(compareList)
    }

    function removeFromCompareList(productId: string) {
        setCompareList(compareList.filter((item) => item !== productId));
    }

    function removeAllFromCompareList() {
        setCompareList([]);
    }

    return (
        <CompareListContext.Provider value={{compareList, setCompareList, addToCompareList, removeFromCompareList, removeAllFromCompareList }}>
            {children}
        </CompareListContext.Provider>
    );
};

export function useCompareListContext() {
    return useContext(CompareListContext);
};