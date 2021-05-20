import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"
import Calendar from "react-calendar"


export default function Historic(){
    return (
        <>
            <Header/>
            <Wrapper>
                asasas
                <Calendar/>
            </Wrapper>
            <Footer/>
        </>
    )
}

export const Wrapper = styled.section`
    margin:0 auto;
    width:100%;
    min-height:100vh;
    background-color: #F2F2F2;
    padding:90px 18px;
`;