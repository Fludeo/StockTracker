import { Navbar } from "./navbar";
import { useHistory, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { StockPage } from "../stock-page/stock-page";
import { useState } from "react";

import { Icon } from "../common/Icon";
import { PopUp } from "../common/popup";
import { SaleForm } from "../common/sale-form";
import { DashBoardPage } from "../dashboard-page/dashboard-page";







export const HomePage = (props) => {

    const saleIcon = {
        type: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        color:'#facc15'
    }

    const [salePopupTrigger, setSalePopupTrigger] = useState(false)

    const history = useHistory()


    

    return (
        <div className=' w-full  flex md:flex-row flex-col '>
            <Router history={history}>
                <Navbar></Navbar>
                <Switch>
                <Route exact path={"/home"} >
                     <DashBoardPage history={history}> </DashBoardPage>  
                    </Route>
                <Route exact path={"/home/dashboard"} >
                     <DashBoardPage history={history}> </DashBoardPage>  
                    </Route>
                    <Route exact path={"/home/stock"} >
                        <StockPage history={history} ></StockPage>
                    </Route>
                </Switch>
            </Router>
            <PopUp trigger={salePopupTrigger}>
                <SaleForm history={history} setSalePopup ={setSalePopupTrigger}></SaleForm>
            </PopUp>
            <Icon onclick={() => setSalePopupTrigger(true)} type={saleIcon.type} color={saleIcon.color} className=' cursor-pointer absolute md:bottom-15  md:right-20 md:h-20 md:w-20 bottom-7 right-5 h-16 w-16  rounded-full hover:bg-blue-600 ' ></Icon>
        </div>
    )
}

export default HomePage;

