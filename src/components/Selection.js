import React from 'react'
import '../styles/Child.css';

const Selection = ({applyColor})=>{

    let[backgroundColor,setBackgroundColor]=React.useState({background:''})
    return(
         <div className="fix-box"
          style={backgroundColor}
          onClick={()=>{applyColor(setBackgroundColor)
          }}>
            <h2 className="subheading">{"Selection"}</h2> 
         </div>
    )
}

export default Selection;
