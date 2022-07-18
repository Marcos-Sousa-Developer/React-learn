import React, {useState, useEffect} from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => { // chamado a cada renderização do component 
        console.log("effect updating")
        document.title = `You cliked ${count} times`
    }, [count]) //ao usar [], so afeta se os parametros dentro forem alterados

  return (
    <div>
        <input type="text" value={name} onChange = {e => setName(e.target.value)} >
        </input>
        <button onClick={() => setCount(count +1 )}>
            Click {count} times
        </button>
    </div>
  )
}

export default HookCounterOne