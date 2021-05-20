import styled from "styled-components";
import {Link} from "react-router-dom"
import {useContext} from "react"
import TodayContext from "../Contexts/TodayContext"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Header(){
    const {todayTasks} = useContext(TodayContext);
    const percentage = (100/todayTasks.length) * todayTasks.filter(d=>d.done).length
    return (
        
        <Wrapper>
            <Link to="/habitos" style={{ textDecoration: 'none' }}>
                <p>Hábitos</p>
            </Link>
            <Link to="/hoje">
                <ButtonWrapper>
                    <CircularProgressbar
                        value={percentage}
                        text={`Hoje`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                        })}
                    />
                </ButtonWrapper>
            </Link>
            <Link to="/historico" style={{ textDecoration: 'none' }}>
                <p>Histórico</p>
            </Link>
        </Wrapper>
    )
}

export const Wrapper = styled.section`
    position:fixed;
    bottom:0;
    left:0;
    z-index:20;
    margin:0 auto;
    width:100%;
    padding: 0px 18px;
    height:70px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    background: white;
    p{
        font-size: 17.976px;
        line-height: 22px;
        color: #52B6FF;
    }
`;

export const ButtonWrapper = styled.section`
   width:91px;
   height:91px;
   border-radius:50%;
   margin-bottom:50px;
   position:relative;
   div{
        width:60px;
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        background-color:#3e98c7;
        border-radius:50px;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #FFFFFF;
   }
 
`;
