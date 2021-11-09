import React, { FormEvent } from "react"
import { useAuth } from "context/auth-context"

export const LoginScreen = () => {
    const {user, login} = useAuth()
    // HTMLFormElement extens Element
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLFormElement).value
        const password = (event.currentTarget.elements[1] as HTMLFormElement).value
        login({username, password})
    }
    return <form onSubmit={handleSubmit}>
        {
           user ? <div>你好，{user.name}</div> : null
        }
        <div>
            <label htmlFor="username">用户名</label>
            <input type='text' id={'username'}></input>
        </div>
        <div>
            <label htmlFor='username'>用户名</label>
            <input type="password" id={'password'} />
        </div>
        <button type={'submit'}>登录</button>
    </form>
}