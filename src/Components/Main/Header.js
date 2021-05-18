import styled from "styled-components";
import logoHeader from "./Assets/headerLogo.svg"

export default function Header(){
    return (
        <Wrapper>
            <img src={logoHeader}></img>
            <img src={logoHeader}></img>
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
   
`;
