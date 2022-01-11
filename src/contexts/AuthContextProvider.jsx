const { createContext, useState } = require("react");

export const AuthContext = createContext({token:"",handleToken: ()=>{}})

export const AuthContextProvider = ({children})=>{
console.log("authcontext")
    const [token, setToken] = useState("");
    const handleToken = (toker)=>{
        setToken(toker)
    }

    return <AuthContext.Provider value= {{token,handleToken}}>
            {children}
        </AuthContext.Provider>
    
}
 
