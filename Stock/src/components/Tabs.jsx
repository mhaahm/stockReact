import React, { useState } from 'react'
import './tabs.css'

const Tabs = ({children}) => {
  const childsArray = React.Children.toArray(children)  
  const [current, setCurrent] = useState(childsArray[0].key);
  const newArray = childsArray.map(child => {
        return React.cloneElement(child,{selected: current == child.key})
  })
  return (
    <div>
       <nav>
          {
            newArray.map((child) => {
                return <button key={child.key} onClick={() => {setCurrent(child.key)}} style={ 
                  {
                    backgroundColor: child.props.color,
                    borderBottomRightRadius: 'unset',
                    borderBottomLeftRadius: 'unset'
                  }
                }>{child.props.icon} {child.props.title}</button>
            })
          }       
       </nav>
       <section>
          { newArray }
       </section>
    </div>
  )
}

export default Tabs