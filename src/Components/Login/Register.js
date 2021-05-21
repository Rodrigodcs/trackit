import { Wrapper, Input, Button } from "./LoginStyles";
import logo from "./Assets/logo.svg"
import {Link , useHistory} from "react-router-dom"
import {useState} from "react"
import axios from "axios"
import Loader from "react-loader-spinner";

export default function Register(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [image,setImage] = useState("");
    const [loading,setLoading]=useState(false)
    let history = useHistory();

    function sendRegistration(){
        setLoading(true)
        const registrationRequest = {
            email,
            name,
            image,
            password
        }
        const request= axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",registrationRequest)
        request.then(r=> {
            history.goBack()
        })
        request.catch(r=> {
            setLoading(false)
            alert("Não foi possivel realizar o cadastro!")
        })

    }
    return (
        <Wrapper>
            <img src={logo} alt="TrackIt logo"/>
            <Input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} value={email}></Input>
            <Input type="password" placeholder="senha" onChange={(e)=>setPassword(e.target.value)} value={password}></Input>
            <Input type="text" placeholder="nome" onChange={(e)=>setName(e.target.value)} value={name}></Input>
            <Input type="text" placeholder="foto" onChange={(e)=>setImage(e.target.value)} value={image}></Input>
            {loading?
                <Button disabled>
                    <Loader
                        type="ThreeDots"
                        color="white"
                        height={45}
                        width={50}
                    />
                </Button>:
                <Button onClick={()=>sendRegistration()}>Cadastrar</Button>
            }
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </Wrapper>
    )
}