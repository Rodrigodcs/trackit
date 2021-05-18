import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Main from "./Login/Login"
import Register from "./Login/Register"
import Habits from "./Main/Habits"
import Today from "./Main/Today"
import Historic from "./Main/Historic"
import {GlobalStyle} from "./GlobalStyle"
import {createContext} from "react"

export default function App(){
    return (
        <>
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
                        <Habits/>
                    </Route>
                    <Route path="/hoje" exact>
                        <Today/>
                    </Route>
                    <Route path="/historico" exact>
                        <Historic/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}