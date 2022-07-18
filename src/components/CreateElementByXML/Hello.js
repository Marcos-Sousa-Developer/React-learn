import React from "react";

const Hello = () => {
        // <div>
        //     <h1> Hello Marcos </h1>
        // </div>
        return React.createElement('div',
                {id: 'hello', className: 'dummyClass'}, 
                React.createElement('h1',null,'Hello Marcos')
                )
}

export default Hello