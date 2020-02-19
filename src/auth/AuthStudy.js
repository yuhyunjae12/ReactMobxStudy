import React from 'react'
import { Redirect } from 'react-router-dom'
import RootComponent from '../containers/RootComponent'

const AuthStudy = ( auth ) => {
    return auth ? <RootComponent/> : <Redirect to="/" />
}

export default AuthStudy
