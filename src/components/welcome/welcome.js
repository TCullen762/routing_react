import React from 'react';

function welcome(props){
    return (
     <div className="welcome">
     <h2>Failte</h2>  {props.name}
     </div>
    )

}

export default welcome;