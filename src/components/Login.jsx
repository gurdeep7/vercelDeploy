import { useContext, useState } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContextProvider";

export const Login = ()=>{

const [form, setForm] = useState({})

const {token,handleToken}= useContext(AuthContext)


const handleChange = ({target: {name, value}})=>{
    setForm({
        ...form,
        [name]:value
    });
    console.log(form)
};

return (
    <div>
        <input type="text" onChange={handleChange} name="email" placeholder="Enter email"/>
        <input type="password" onChange={handleChange} name="password" placeholder="Enter Password"/>
        <button onClick={()=>{
            try{
               fetch("https://reqres.in/api/login",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(form),
                });
                handleToken("1231212312");
                console.log(handleToken("fdghjkk"),"login")
                Navigate(-1);
                
            }catch{
                console.log("hjkjk")
            }
        }}>Login</button>
    </div>
)
}