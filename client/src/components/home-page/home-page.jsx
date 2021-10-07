import  {Navbar}  from "./navbar";
import { Route,Switch, BrowserRouter as Router } from "react-router-dom";
import { StockPage } from "../stock-page/stock-page";
import LoginPage from "../login-page/loginPage";



export const HomePage = (props)=>{


    const links=[
        {link:'home',url: '/home'},
        {link:'Clientes',url: '/clients'},
        {link:'Stock',url: '/stock'},
        {link:'Salir',url: '/login'},
    ]
    

    return(
        <>
        <Router>
        <Navbar links= {links}></Navbar>
        <Switch>
            <Route exact path = "/stock"  >
                <StockPage></StockPage>
            </Route>
        
        </Switch>
        </Router>
        </>
    )
}

export default HomePage;