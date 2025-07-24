import {useState} from "react";

const Name = (props) =>{
    return (
        <div>
            <p>{props.name}</p>
        </div>
    )
}

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Samid Amaury'},
    ])

    const [newName, setNewName] = useState('');

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }
    const handleNameSubmit = (event) => {
        event.preventDefault();
        const NewPerson = {
            name: newName
        }

        const validation = persons.findIndex(p => p.name == NewPerson.name);

        //existing person check
        if(validation != -1){
            alert(`${NewPerson.name} ya existe en el ditectorio`);
        }else {
            //crea nuevo contacto
            setPersons(persons.concat(NewPerson));
            setNewName('')
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleNameSubmit}>
                <div>
                    name: <input
                    value={newName}
                    onChange={handleNameChange}
                />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div><strong>Debug</strong>:
                {persons.map((person) => (
                    <Name key={person.name} name={person.name}/>
                ))}
            </div>

        </div>
    )

}

export default App;