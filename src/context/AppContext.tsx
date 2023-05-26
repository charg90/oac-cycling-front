import { createContext, useState } from 'react'
import { ICrendentials } from '../Interfaces/Interfaces'

interface AppContextProps {
    credentials: ICrendentials | null
    setCredentials: React.Dispatch<React.SetStateAction<ICrendentials | null>>
    children: React.ReactNode
}
const AppContext = createContext({
    credentials: {} as ICrendentials,
    setCredentials: {} as React.Dispatch<React.SetStateAction<ICrendentials>>,
})
const AppProvider = ({ children }: AppContextProps) => {
    // user state
    const [credentials, setCredentials] = useState({} as ICrendentials)
    return (
        <AppContext.Provider value={{ credentials, setCredentials }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }
