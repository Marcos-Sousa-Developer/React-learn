import React from 'react'
import Person from '../Props/Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const persons = [
        {
            id: 1,
            name: "Bruce",
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: "Clark",
            age: 20,
            skill: 'React'
        },
        {
            id: 3,
            name: "Diana",
            age: 10,
            skill: 'React'
        }
    ]
    // const personList = persons.map(person => <Person key={person.id} person={person}></Person>)
    const nameList = names.map((name, index) => <h2 key={index}> {index} {name}</h2>)

  return <div>{nameList}</div>
}

export default NameList