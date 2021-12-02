import React from 'react';

const Person = ({fullname ,personDelete ,changed}) => {
    return (
        <div >
        <p> {`${fullname}`}</p>
        <input type="text" placeholder={"fullname"} onChange={changed}/>
        <button onClick={personDelete}>حذف</button>
        </div>
    );
}
export default Person;

