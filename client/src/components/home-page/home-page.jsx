import { Navbar } from "./navbar";
import { useHistory, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { StockPage } from "../stock-page/stock-page";
import LoginPage from "../login-page/loginPage";
import { useState } from "react";
import { errorMessage } from "../common/errorMessage";
import { Icon } from "../common/Icon";
import { PopUp } from "../common/popup";
import { SaleForm } from "../common/form";


const saleIcon = {
    type: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    color: '#A3E635'
}




export const HomePage = (props) => {
    const [salePopupTrigger, setSalePopupTrigger] = useState(false)

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
            <PopUp trigger={salePopupTrigger}>
                <SaleForm></SaleForm>
            </PopUp>
            <Icon onclick={() => setSalePopupTrigger(true)} type={saleIcon.type} color={saleIcon.color} className=' absolute bottom-20 right-32 h-20 w-20  rounded-full hover:bg-blue-600 ' ></Icon>
        </div>
    )
}

export default HomePage;

