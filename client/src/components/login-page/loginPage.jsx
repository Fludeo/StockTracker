import  LoginForm  from "../login-page/login-form";
import Loading from "../common/loading"
import {useState} from "react"
import { useHistory } from "react-router-dom";


export const LoginPage = ()=>{
const [password,setPassword] = useState(null)
const [username,setUsername] = useState(null)
const [loading,setLoading]= useState(false)
const history = useHistory()


   
const LoginFetch = async (username,password) =>{
    setLoading(true)
        const response = await fetch('/login',{method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
         body: JSON.stringify({username: username,password:password}),
        })
       if (response.ok){
         history.push("/home")
        
     }
     else{
         
        history.push("/login")

     }
        }




      
       
    
    


    return(
        <>
        
        {loading ? 
     <Loading></Loading>:
        <div className="grid grid-cols-3 gap-0  min-h-screen">
                <aside className=" container bg-gradient-to-r from-yellow-400 to-yellow-500"></aside>
                <main className = "container flex col-span-2 bg-gray-800" >
                        <LoginForm onSubmitForm={()=>LoginFetch(username,password)} onChangeUsername={event=> setUsername(event.target.value)} onChangePassword ={event=> setPassword(event.target.value)}></LoginForm>
                </main>
    
     </div> 
        }
     </>
     );
}
export default LoginPage;