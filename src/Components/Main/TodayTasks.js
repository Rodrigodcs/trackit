import checkMark from "./Assets/check.svg"
import styled from "styled-components";

export default function TodayTasks({habit,check,unCheck}){

    
    return (
        <Wrapper>
            <Info>
                <Title>{habit.name}</Title>
                <Streak>
                    <p>Sequência atual: 
                        {habit.done?
                            <DaysCounter green> {habit.currentSequence} dias</DaysCounter>:
                            <DaysCounter> {habit.currentSequence} dias</DaysCounter>
                        }
                    </p>
                    <p>Seu recorde: 
                        {habit.highestSequence===habit.currentSequence?
                            <DaysCounter green> {habit.highestSequence} dias</DaysCounter>:
                            <DaysCounter> {habit.highestSequence} dias</DaysCounter>
                        }
                    </p>
                </Streak>
            </Info>
            {habit.done?
                <Check checked onClick={()=>unCheck(habit)}><img src={checkMark} alt="check mark"></img></Check>:
                <Check onClick={()=>check(habit)}><img src={checkMark} alt="check mark"></img></Check>
            }
        </Wrapper>
        
    )
}


export const Wrapper = styled.section`
    display:flex;
    justify-content: space-between;
    width:100%;
    background: #FFFFFF;
    border-radius: 5px;
    padding:13px;
    margin-bottom:10px;
`;

export const Info = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    
`;

export const Title = styled.h1`
    width:100%;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
`;

export const Streak = styled.section`
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
`;

export const Check = styled.button`
    width: 69px;
    height: 69px;
    background: ${props => props.checked ? "#8FC549" : "#EBEBEB" };
    border-radius: 5px;
    border:none;
`;

export const DaysCounter = styled.p`
    display:inline;
    font-size: 12.976px;
    line-height: 16px;
    color: ${props => props.green ? "#8FC549" : "#666666" };
`;
