import React from 'react'

// function FRinput() {
//   return (
//     <div>
//         <input type="text"></input>
//     </div>
//   )
// }

const FRinput = React.forwardRef((props, ref)=> {

    return (
        <div>
            <input type="text" ref={ref}></input>
        </div>
    )
})

export default FRinput