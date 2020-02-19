import React from 'react'
import { Redirect } from 'react-router-dom'
import RootComponent from '../containers/RootComponent'

// UserStore에 auth값을 통해 RootComponent or 메인 화면으로 리다이렉트 컴포넌트 리턴
const AuthStudy = ( auth ) => {
    return auth ? <RootComponent/> : <Redirect to="/" />
}

export default AuthStudy
