import { Wrapper, Input, Button } from "./LoginStyles";
import logo from "./Assets/logo.svg"
import {Link, useHistory} from "react-router-dom"
import {useState} from "react"
import axios from "axios"
import Loader from "react-loader-spinner";

export default function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loading,setLoading]=useState(false)
    let history = useHistory();
    
    function logIn(){
        setLoading(true)
        const user={
            email,
            password
        }
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",user)
        request.then(r=> {
            console.log(r)
            history.push("/habitos")
        })
        request.catch(r=> {
            console.log(r)
            setLoading(false)
            alert("Não foi possivel efetuar o login!")
        })
    }

    return (
        <Wrapper>
            <img src={logo} alt="TrackIt logo"/>
            <Input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} value={email}></Input>
            <Input type="password" placeholder="senha" onChange={(e)=>setPassword(e.target.value)} value={password}></Input>
            {loading?
                <Button disabled>
                    <Loader
                        type="ThreeDots"
                        color="white"
                        height={45}
                        width={50}
                    />
                </Button>:
                <Button onClick={()=>logIn()}><>Entrar</></Button>
            }
            <Link to="/register">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
            
        </Wrapper>
    )
}