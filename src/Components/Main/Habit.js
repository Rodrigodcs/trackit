import styled from "styled-components";
import trash from "./Assets/trash.svg"

export default function Habit({habit}){

   
    
    const weekdays = ["D","S","T","Q","Q","S","S"]
    return ( 
        <Wrapper>
            <p>{habit.name}</p>
            <Weekdays>
                {weekdays.map((d,index)=>{
                    if(habit.days.find(element=>element===index)!==undefined){
                        return <Days selected>{d}</Days>
                    }else{ 
                        return <Days>{d}</Days>
                    }
                })}
            </Weekdays>
            <img src={trash}></img>
        </Wrapper>
    )
}

export const Wrapper = styled.section`
    position:relative;
    display:flex;
    flex-direction:column;
    margin:0 auto;
    width:100%;
    height:auto;
    background: white;
    padding:13px 35px 15px 14px;
    gap:8px;
    border-radius:5px;
    margin-bottom:10px;
    p{
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        background-color:white;
    }
    img{
        position:absolute;
        top:10px;
        right:10px;
    }
    
`;

export const Weekdays = styled.section`
    display:flex;
    margin:0 auto;
    gap:4px;
    width:100%;
    height:30px;
    background: white;
    div{
        display:flex;
        align-items:center;
        justify-content:center;
        width:30px;
        height:30px;
        font-size: 19.976px;
        line-height: 25px;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        color:${props => props.selected ? "white" : "#DBDBDB" };
        background-color:${props => props.selected ? "#DBDBDB" : "white" };
    }
`;
export const Days = styled.section`
    display:flex;
    align-items:center;
    justify-content:center;
    width:30px;
    height:30px;
    font-size: 19.976px;
    line-height: 25px;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    color:${props => props.selected ? "white" : "#DBDBDB" };
    background-color:${props => props.selected ? "#DBDBDB" : "white" };
`;