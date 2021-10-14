import { Navbar } from "./navbar";
import { useHistory, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { StockPage } from "../stock-page/stock-page";
import LoginPage from "../login-page/loginPage";
import { useState } from "react";
import { errorMessage } from "../common/errorMessage";



export const HomePage = (props) => {
    const history = useHistory()




    return (
        <div className='container w-full  flex md:flex-row flex-col '>
            <Router history={history}>
                <Navbar></Navbar>
                <Switch>
                    <Route exact path="/logged/stock" >
                        <StockPage history={history} ></StockPage>
                    </Route>
                    <Route exact path="/aaaa" >
                        <h1>aaaaaa</h1>
                    </Route>

                </Switch>
            </Router>

        </div>
    )
}

export default HomePage;

