import React from "react"; 

const Greet = props => { 

    const {name,heroName} = props

    console.log(name, '+', heroName)
    return (
            <div>
                <h1> Hello Marcos {name} a.k.a {heroName} </h1>
            </div>
            
        
    )
    
}


export default Greet;