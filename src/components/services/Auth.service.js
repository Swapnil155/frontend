import api from './Api'
import TokenService from './Token.service'

const singUp  = async (email,password) => {
    return api
    .post("/api/user/signUp", {
        email,
        password,
    }).then((response) => {
        console.log(response)
        if (response.data.accessToken){
            TokenService.setUser(response.data)
        }
        return response
    })
}

const login = (email,password) => {

    return api
    .post("/api/user/login",{
        email,
        password
    })
    .then((response) =>{
            if(response.data.accessToken){
                console.info(response.data)
                // TokenService.setUser(response.data)
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response
        
    })
}

const logout = () => {
    TokenService.removeUser()
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"))
}

const AuthService = {
    singUp,
    login,
    getCurrentUser,
    logout
}

export default AuthService