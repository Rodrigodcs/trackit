import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Main from "./Login/Login"
import Register from "./Login/Register"
import HabitsScreen from "./Main/HabitsScreen"
import Today from "./Main/Today"
import Historic from "./Main/Historic"
import {GlobalStyle} from "./GlobalStyle"
import UserContext from "./Contexts/UserContext"
import TodayContext from "./Contexts/TodayContext"
import {useState} from "react"

export default function App(){
    const [userInfo, setUserInfo]=useState("")
    const [todayTasks, setTodayTasks]=useState([])

    

    return (
        <TodayContext.Provider value={{todayTasks, setTodayTasks}}>
            <UserContext.Provider value={{userInfo, setUserInfo}}>
                <GlobalStyle/>
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <Main/>
                        </Route>
                        <Route path="/cadastro" exact>
                            <Register/>
                        </Route>
                        <Route path="/habitos" exact>
                            <HabitsScreen/>
                        </Route>
                        <Route path="/hoje" exact>
                            <Today/>
                        </Route>
                        <Route path="/historico" exact>
                            <Historic/>
                        </Route>
                    </Switch>
                </Router>
            </UserContext.Provider>
        </TodayContext.Provider>
    )
}