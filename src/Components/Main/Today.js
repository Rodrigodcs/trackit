import Header from "./Header"
import Footer from "./Footer"
import TodayTasks from "./TodayTasks"
import {useState, useEffect} from 'react';
import axios from "axios"
import {useContext} from "react"
import UserContext from "../Contexts/UserContext"
import TodayContext from "../Contexts/TodayContext"
import styled from "styled-components";
import CreateHabitWindow from "./CreateHabitWindow"

export default function Today(){
    const {setTodayTasks} = useContext(TodayContext);
    const {todayTasks} = useContext(TodayContext);
    const {userInfo} = useContext(UserContext);
    const [userHabits,setUserHabits]= useState([])

    useEffect(() => {
        const config={
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
		const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config);
		request.then(r => {
			console.log(r)
            setUserHabits(r.data)
            setTodayTasks(r.data)
		});
        request.catch(e =>{
            alert("Ocorreu um erro inesperado")
        }) 
	}, [userInfo.token]);

    function reRenderHabits(){
        const config={
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
		const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config);
		request.then(r => {
			console.log(r)
            setUserHabits(r.data)
            setTodayTasks(r.data)
		});
        request.catch(e =>{
            alert("Ocorreu um erro inesperado")
        }) 
    }

    function checkHabit(habit){
        console.log(habit)
        const config={
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        console.log(config)
		const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`,{},config);
		request.then(r => {
			console.log(r)
            reRenderHabits()
		});
        request.catch(e =>{
            alert("Não foi possivel marcar hábito!")
        }) 
    }
    function unCheckHabit(habit){
        console.log(habit)

        const config={
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
		const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`,{},config);
		request.then(r => {
			console.log(r)
            reRenderHabits()
		});
        request.catch(e =>{
            alert("Não foi possivel desmarcar hábito!")
        }) 
    }

    const dayjs = require('dayjs');
    console.log(dayjs())
    let now = dayjs();
    console.log(now.format());

    const percentage = (100/todayTasks.length) * todayTasks.filter(d=>d.done).length
    return (
        <>
            <Header/>
            <Wrapper>

                <TodayInfo>
                    <TodayDate>Segunda, 17/05</TodayDate>
                    {percentage===0?
                        <TodayPercentage>Nenhum hábito concluído ainda</TodayPercentage>:
                        <TodayPercentage someDone>{percentage.toFixed(0)}% dos hábitos concluídos</TodayPercentage>
                    }
                </TodayInfo>
                {userHabits.map(h=><TodayTasks key={h.id} habit={h} check={checkHabit} unCheck={unCheckHabit}/>)}
                
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

export const TodayInfo = styled.section`
    display:flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const TodayDate = styled.h2`
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`;

export const TodayPercentage = styled.h3`
    font-size: 17.976px;
    line-height: 22px;
    color: ${props => props.someDone ? "#8FC549" : "#BABABA" };
`;