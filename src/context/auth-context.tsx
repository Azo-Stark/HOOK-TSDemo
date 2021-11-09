import React, {ReactNode, useState} from "react"
import * as auth from 'auth-provider'
import {User} from 'types/user'

interface AuthForm {
    username: string,
    password: string
}
const AuthContext = React.createContext<{
    user: User | null,
    login: (form: AuthForm) => Promise<void>,
    register: (form: AuthForm) => Promise<void>,
    logout: () => void,
} | undefined>(undefined)
AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<User | null>(null)

    const login = (form: AuthForm) => auth.login(form).then(user => setUser(user))

    const register = (form: AuthForm) => auth.register(form).then(user => setUser(user))
    
    const logout = () => auth.logout().then(user => setUser(null))

    return <AuthContext.Provider children={children} value={{user, login, logout, register}}></AuthContext.Provider>
}

// 自定义HOOK 获取全局的身份信息
export const useAuth = () => {
    const context = React.useContext(AuthContext)
    if(!context) {
        throw new Error('useContext必须在AuthProvider中使用')
    }
    return context
}