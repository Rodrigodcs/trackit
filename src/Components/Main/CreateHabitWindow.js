import {useState} from "react"
import styled from "styled-components";

export default function CreateHabitWindow({hide,create,changeHabit,currentHabit}){

    const [habit,setHabit]=useState(currentHabit.name)
    const [days,setDays]=useState(currentHabit.days)
    console.log(habit)

    function changeInput(e){
        setHabit(e.target.value)
        changeHabit({name:e.target.value,days:days})
    }

    function select(index){
        days.push(index);
        setDays([...days.sort()])
        updateHabit()
    }
    function deSelect(index){
        const item=days.indexOf(index)
        days.splice(item,1)
        setDays([...days])
        updateHabit()
    }
    function updateHabit(){
        changeHabit({name:habit,days:days})
    }

    function creatingHabit(){
        create({name:habit,days:days})
        hide()
    }

    console.log("array")
    console.log(days)

    const weekdaysLabel = ["D","S","T","Q","Q","S","S"]
    return (
        <Wrapper>
            <input placeholder="nome do hábito" value={habit} onChange={(e)=>changeInput(e)}></input>
            <Weekdays>
                {weekdaysLabel.map((day,index)=>{
                    if(days.includes(index)){
                        return <Days selected key={index} onClick={()=>deSelect(index)}>{day}</Days>
                    }else{ 
                        return <Days key={index} onClick={()=>select(index)}>{day}</Days>
                    }
                })}
            </Weekdays>
            <Save>
                <p onClick={()=>hide()}>Cancelar</p>
                <button onClick={()=>creatingHabit()}>Salvar</button>
            </Save>
        </Wrapper>
    )
}

export const Wrapper = styled.section`
    position:relative;
    width:100%;
    background-color:blue;
    display:flex;
    flex-direction:column;
    padding:18px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom:15px;
    input{
        min-height:45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        padding-left:5px;
        margin-bottom:10px;
        ::placeHolder{
            color: #DBDBDB;
        }
    }
`;

export const Weekdays = styled.section`
    display:flex;
    width:100%;
    gap:4px;
    margin-bottom: 50px;
    
`;
export const Days = styled.section`
    display:flex;
    align-items: center;
    justify-content:center;
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 19.976px;
    line-height: 25px;
    color:${props => props.selected ? "white" : "#CFCFCF" };
    background-color:${props => props.selected ? "#CFCFCF" : "white" };
`;

export const Save = styled.section`
    position:absolute;
    right:16px;
    bottom:15px;
    display:flex;
    align-items: center;
    gap:23px;
    button{
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-size: 15.976px;
        line-height: 20px;
        color: #FFFFFF;
        border:none;
    }
    p{
        font-size: 15.976px;
        line-height: 20px;
        color: #52B6FF;
    }
    
`;