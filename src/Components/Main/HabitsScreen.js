import Header from "./Header"
import Footer from "./Footer"
import Habit from "./Habit"
import {useState, useEffect} from 'react';
import axios from "axios"
import {useContext} from "react"
import UserContext from "../Contexts/UserContext"
import styled from "styled-components";
import CreateHabitWindow from "./CreateHabitWindow"


export default function HabitsScreen(){
    const {userInfo} = useContext(UserContext);
    const [userHabits,setUserHabits] = useState([])
    const [creationWindow,setCreationWindow] = useState(false)
    const [newHabit,setNewHabit] = useState({name:"",days:[]})
    const [saving,setSaving]=useState(false)

    useEffect(() => {
        const config={
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
		const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",config);
		request.then(r => {
			console.log(r)
            setUserHabits(r.data)
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
		const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",config);
		request.then(r => {
			console.log(r)
            setUserHabits(r.data)
		});
        request.catch(e =>{
            alert("Ocorreu um erro inesperado")
        }) 
    }

    function deleteHabit(habit){
        console.log(habit)

        const config={
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
		const request = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`,config);
		request.then(r => {
			console.log(r)
            reRenderHabits()
		});
        request.catch(e =>{
            alert("Não foi possivel deletar hábito!")
        }) 
    }

    function displayCreationWindow(display){
        setCreationWindow(display)
    }

    function createHabit(habit){
        setSaving(true)
        const config={
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",newHabit,config);
        promisse.then(r => {
			console.log(r)
            setNewHabit({name:"",days:[]})
            reRenderHabits()
            setSaving(false)
		});
        promisse.catch(e =>{
            alert("Ocorreu um erro inesperado")
            setSaving(false)
        })
    }
   
    return ( 
        <>
        <Header/>
        <Wrapper>
            <Create>
                <p>Meus hábitos</p>
                <button onClick={()=>displayCreationWindow(true)}>+</button>
            </Create>
            {creationWindow?
                <CreateHabitWindow hide={displayCreationWindow} create={createHabit} changeHabit={setNewHabit} currentHabit={newHabit} saving={saving}/>:
                <p></p>
            }
            {userHabits.length===0?
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>:
                userHabits.map(i=><Habit key={i.id} habit={i} deleteHabit={deleteHabit}/>)
            }
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

export const Create = styled.section`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:20px;
    p{
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    button{
        width:40px;
        height:35px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
        font-size: 26.976px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
        padding-bottom: 1px;
    }
`;
