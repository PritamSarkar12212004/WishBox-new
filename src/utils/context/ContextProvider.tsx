import { createContext, use, useContext, useState } from "react";

interface ContextinterFace {
    data: any,
    setdata: any
    authReloader: any,
    setauthReloader: any
}

const Context = createContext<ContextinterFace | undefined>(undefined);
export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setdata] = useState<any>()
    // atth section
    const [authReloader, setauthReloader] = useState<any>(false)

    return (
        <Context.Provider
            value={{
                data,
                setdata,
                authReloader,
                setauthReloader
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const userContext = () => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error('userContext must be used within a ContextProvider');
    }
    return context;
};

