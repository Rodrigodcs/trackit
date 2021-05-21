import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"
import Calendar from "react-calendar"
import {useState,useEffect,useContext} from 'react';
import 'react-calendar/dist/Calendar.css';
import UserContext from "../Contexts/UserContext"
import axios from "axios"
import dayjs from "dayjs";


export default function Historic(){
    const [date,setDate]=useState(new Date())
    const {userInfo} = useContext(UserContext);
    const [habitsHistory,setHabitsHistory]=useState([])

    useEffect(() => {
        const config={
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
		const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily",config);
		request.then(r => {
			console.log(r.data)
            const x=r.data.map(h=> { return {day:h.day,completed:h.habits.reduce((a,b)=> a&&b.done,true)}})
            setHabitsHistory(r.data.map(h=> { return {day:h.day,completed:h.habits.reduce((a,b)=> a&&b.done,true)}}))
            console.log(x)
		})
        request.catch(e =>{
            alert("Ocorreu um erro inesperado")
        }) 
	}, [userInfo.token]);
 
    return (
        <>
            <Header/>
            <Wrapper>
                <Calendar 
                    onChange={(d)=>setDate(d)} 
                    value={date}
                    //FIQUEI MUITO TEMPO AQUI TENTANDO FAZER COM HIGH ORDER FUNCTION E NAO CONSEGUI, ACABEI FAZENDO COM O FOR MESMO
                    tileClassName={({ date }) => {
                        for(let i=1;i<habitsHistory.length;i++){
                            if(habitsHistory[i].day===dayjs(date).format("DD/MM/YYYY")){
                                if(habitsHistory[i].completed){
                                    return "completed"
                                }else{
                                    return "incompleted"
                                }
                            }
                        }
                    }}
                ></Calendar>
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
    .completed{
        background-color: #8CC654;
        border-radius: 50%;
    }
    .incompleted{
        background-color: #EA5766;
        border-radius: 50%;
    }
`;
