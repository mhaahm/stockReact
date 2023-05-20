import React from "react";

const Tab = ({children, selected,color}) => {
    return <div hidden={!selected} style={ {backgroundColor: color, padding:'5px'} }>
        { children }
    </div>
}

export default Tab;