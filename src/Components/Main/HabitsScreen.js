import Header from "./Header"
import Footer from "./Footer"
import Habit from "./Habit"
import {useState, useEffect} from 'react';
import axios from "axios"
import {useContext} from "react"
import UserContext from "../Contexts/UserContext"
import styled from "styled-components";


export default function HabitsScreen(){
    const {userInfo} = useContext(UserContext);

    useEffect(() => {
        console.log(userInfo.token)
        const config={
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
		const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",config);
		request.then(r => {
			console.log(r)
		});
        request.catch(e =>{
            alert("Ocorreu um erro inesperado")
        }) 
	}, []);
    const teste = [
        {
            id: 1,
            name: "Nome do hábito",
            days: [1, 3, 5]
        },
        {
            id: 2,
            name: "Nome do hábito 3",
            days: [1, 3, 4, 6]
        },
        {
            id: 2,
            name: "Nome do hábito 4",
            days: [1, 3, 4, 6]
        },
        {
            id: 2,
            name: "Nome do hábito 5",
            days: [1, 3, 4, 6]
        },
        {
            id: 2,
            name: "Nome do hábito 6",
            days: [1, 3, 4, 6]
        }
    ]
    return ( 
        <>
        <Header/>
        <Wrapper>
            <div></div>
            {teste.map(i=><Habit habit={i}/>)}
            
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