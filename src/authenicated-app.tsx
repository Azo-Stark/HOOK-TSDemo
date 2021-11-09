import { useAuth } from "context/auth-context";
import React from "react";
// 登陆状态的app
export const AuthenicateApp = () => {
    const {logout} = useAuth()
    return <div>
        登陆成功啦。。。。。。
        <button onClick={logout}>退出</button>
    </div>
}