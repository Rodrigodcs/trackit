import {useState} from "react"
import styled from "styled-components";

export default function CreateHabitWindow({hide,create}){
    const [newHabit,setNewHabit] = useState([])

    const weekdays = ["D","S","T","Q","Q","S","S"]
    
    return (
        <Wrapper>
            <input placeholder="oi galera"></input>

        </Wrapper>
    )
}

export const Wrapper = styled.section`
    width:100%;
    height:200px;
    background-color:blue;
    display:flex;
    flex-direction:column;
    padding:18px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom:10px;
    input{
        min-height:45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        padding-left:5px;
        ::placeHolder{
            color: #DBDBDB;
        }
    }
`;
