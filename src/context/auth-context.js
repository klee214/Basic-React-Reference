import React from 'react'

const AuthContext = React.createContext({
    Authentication: false,
    login(){}
})

export default AuthContext