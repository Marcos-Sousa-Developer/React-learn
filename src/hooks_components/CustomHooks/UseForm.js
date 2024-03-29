import React from 'react'
import useInput from '../../hooks/useInput'

function UseForm() {
    

    const [firstName, bindFirstName, resetFirstName] = useInput('')

    const [lastName, bindLastName, resetLastName] = useInput('')


    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name</label>
                <input {... bindFirstName} type="text">
                </input>
            </div>

            <div>
                <label>Last Name</label>
                <input {... bindLastName} type="text">
                </input>
            </div>
        </form>
    </div>
    
  )
}

export default UseForm