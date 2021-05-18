import styled from "styled-components";

export const Wrapper = styled.section`
    margin:0 auto;
    max-width: 375;
    margin-top:70px;
    width:100%;
    padding: 0px 35px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:6px;
    img{
        margin-bottom:50px;
    }
    p{
        margin-top:15px;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`;

export const Input = styled.input`
    width:100%;
    max-width:303px;
    border-radius:5px;
    height:45px;
    border: 1px solid #D5D5D5;
    font-size: 19.976px;
    line-height: 25px;
    padding-left:10px;
    ::placeholder{
        color: #DBDBDB;
    }
`;

export const Button = styled.button`
    color:white;
    background: #52B6FF;
    border-radius: 5px;
    width:100%;
    max-width:303px;
    height:45px;
    border:none;
    font-size: 19.976px;
    line-height: 25px;
    opacity:${props => props.disabled===true ? "0.6" : "1" };
`;