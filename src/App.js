import React from "react";
import './App.css';
import { Persons } from './components/Persons';


class App extends React.Component {
 
        state = {
            persons : [],
            person: '',
            showpersons: false,
        };
    
   
    handleNameChange = (e,id)=>{
    const { persons : allPersons} = this.state;
    const personIndex = allPersons.findIndex(p=> p.id === id);
    const person = allPersons[personIndex];            
    person.fullname = e.target.value;
    const persons = [...allPersons]
    persons[personIndex] = person ; 
    this.setState({ persons})
    }
    handleShowPersons = () => {
        this.setState({
            showpersons : !this.state.showpersons
        })
    }
    handleDeletePersons = (id) => {
        const persons = [ ...this.state.persons];
        const filterPersons = persons.filter(p=> p.id !== id);
        this.setState({persons : filterPersons})
    }
    handleNewPersons = () =>{
        const persons = [...this.state.persons];
        const person = {
            id: Math.floor(Math.random()*10000),
            fullname :  this.state.person
        };
        persons.push(person);
        this.setState({ persons , person : " "});
    }
    setPerson = ( e) => {
        this.setState({
            person : e.target.value
        });
    }
    render() {
        const { persons , showpersons }   = this.state;
        let person = null;
        if (showpersons){
            person = <Persons personDelete={this.handleDeletePersons} personChange={this.handleNameChange} persons={persons}/>
        }
        return ( 
            <div style={{textAlign: "center"}}>
                <h1> مدیریت کننده اشخاص </h1>
                <h2>تعداد اشخاص {persons.length}</h2>
                <hr/>
                <div>
                <input type="text" placeholder="ساخت شخص جدید" style={{direction : "rtl"}}/>
                </div>
                {person}            
                <button onClick={this.handleShowPersons}>نمایش اشخاص</button>
            </div>
        );
    }
}
export default App;
