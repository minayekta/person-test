import React from 'react'
import Person from './Person';

export const Persons = ({persons , personDelete ,personChange}) => {
    return (
        <div>
            { persons.map((person)=>{
                
             return   <Person
                key={person.id}
                fullname={person.fullname}
                personDelete={()=>personDelete(person.id)}
                changed={e=> personChange(e,person.id)}
                />
            })}
        </div>
    )
}
