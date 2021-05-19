import styled from "styled-components";
import logoHeader from "./Assets/headerLogo.svg"
import {useContext} from "react"
import UserContext from "../Contexts/UserContext"

export default function Header(){
    const {userInfo} = useContext(UserContext);

    return (
        <Wrapper>
            <img src={logoHeader} alt="logo"></img>
            <UserImage src={userInfo.image} alt="User Image"></UserImage>
        </Wrapper>
    )
}

export const Wrapper = styled.section`
    position:fixed;
    top:0;
    left:0;
    z-index:20;
    margin:0 auto;
    width:100%;
    padding: 0px 18px;
    height:70px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;


export const UserImage = styled.img`
   width:50px;
   height:50px;
   border-radius:50%;
`;
