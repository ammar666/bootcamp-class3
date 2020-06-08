import React from 'react';

function child(props){
    return(
        <div>
            <h1>Today we are serving {props.dishname}</h1>
            <h1>Today we are also serving {props.Sweet}</h1>
        </div>
    )
}
export default child;