// 在真实的开发环境中如果使用到了filebase这种第三方库，本文件是不需要开发者开发的

import {User} from 'types/user'

const localStorageKey = '__auth_provider_token__'

const baseURL = process.env.REACT_APP_API_URL

export const getToken = () => window.localStorage.getItem(localStorageKey)

export const handleUserResponse = ({user}:{user: User}) => {
    window.localStorage.setItem(localStorageKey, user.token || '')
    return user
}

export const login = (data: {user: string, password: string}) => {
    fetch(`${baseURL}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(async(response) => {
        if(response.ok) {
            return handleUserResponse(await response.json())
        }
    })
} 