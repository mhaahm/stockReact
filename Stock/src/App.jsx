import {useEffect, useState} from "react";
import "./App.css";
import Tab from "./components/Tab";
import Tabs from "./components/Tabs";
import Inventory from "./components/Inventory/Inventory";
import Mouvment from "./components/Mouvment/Mouvment";
import {BsReverseListColumnsReverse} from "react-icons/bs";
import {FaThList} from "react-icons/fa";
import {AiFillInteraction} from "react-icons/ai";
import {RiCustomerService2Fill} from "react-icons/ri";
import Fournisseur from "./components/Founisseur/Fournisseur";
import Information from "./components/Information/Information";
import StockErrorMgr from "./components/Utils/StockErrorMgr";

function App() {

    return (<div className="container">
        <StockErrorMgr>
            <Tabs>
                <Tab title="Inventory" key={"Inventory"} color="#3399FF" icon={<FaThList/>}>
                    <Inventory/>
                </Tab>
                <Tab title="Mouvment" key={"Mouvment"} color="#d27bb3" icon={<AiFillInteraction/>}>
                    <Mouvment/>
                </Tab>
                <Tab title="Client Et Fournisseur" key={"customer"} color="#89df69" icon={<RiCustomerService2Fill/>}>
                    <Fournisseur/>
                </Tab>
                <Tab title="Information" key={"information"} color="#ef8d10" icon={<BsReverseListColumnsReverse/>}>
                    <Information/>
                </Tab>
            </Tabs>
        </StockErrorMgr>
    </div>);
}

export default App;
