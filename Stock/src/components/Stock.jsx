import React from "react";
import StockErrorMgr from "./Utils/StockErrorMgr.jsx";
import Tabs from "./Tabs.jsx";
import Tab from "./Tab.jsx";
import {FaThList} from "react-icons/fa";
import Inventory from "./Inventory/Inventory.jsx";
import {AiFillInteraction} from "react-icons/ai";
import Mouvment from "./Mouvment/Mouvment.jsx";
import {RiCustomerService2Fill} from "react-icons/ri";
import Fournisseur from "./Founisseur/Fournisseur.jsx";
import {BsReverseListColumnsReverse} from "react-icons/bs";
import Information from "./Information/Information.jsx";


class Stock extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
          return  <div className="pt-5 mt-4">
                <StockErrorMgr>
                    <Tabs>
                        <Tab title="Inventory" key={"Inventory"} color="#3399FF" icon={<FaThList/>}>
                            <Inventory/>
                        </Tab>
                        <Tab title="Mouvment" key={"Mouvment"} color="#d27bb3" icon={<AiFillInteraction/>}>
                            <Mouvment/>
                        </Tab>
                        <Tab title="Client Et Fournisseur" key={"customer"} color="#89df69"
                             icon={<RiCustomerService2Fill/>}>
                            <Fournisseur/>
                        </Tab>
                        <Tab title="Information" key={"information"} color="#ef8d10"
                             icon={<BsReverseListColumnsReverse/>}>
                            <Information/>
                        </Tab>
                    </Tabs>
                </StockErrorMgr>
            </div>
    }

}

export default Stock;