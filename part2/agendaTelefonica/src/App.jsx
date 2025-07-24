import {useState} from "react";

const Name = (props) =>{
    return (
        <div>
            <p>{props.name} - {props.telefono} </p>

        </div>
    )
}

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Samid Amaury', telefono:'123456789'},
    ])

    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    //Manejadores de eventos
    // Nombre
    const handleNameChange = (event) => {
        // console.log(event.target.value)
        setNewName(event.target.value)
    }
    //Telefono
    const handleNumberChange = (event)=>{
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }
    //Envio y validacion de formulario
    const handleNameSubmit = (event) => {
        event.preventDefault();
        const NewPerson = {
            name: newName,
            telefono:newNumber
        }
        //variable de validacion
        const validation = persons.findIndex(p => p.name == NewPerson.name);

        //validacion de nombre
        if(validation != -1){
            alert(`${NewPerson.name} ya existe en el ditectorio`);
        }else {
            //crea nuevo contacto
            setPersons(persons.concat(NewPerson));
            setNewName('')
            setNewNumber('');
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
                    telefono: <input
                    value={newNumber}
                    onChange={handleNumberChange}
                />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div><strong>Debug</strong>:
                {persons.map((person) => (
                    <Name key={person.name} name={person.name} telefono={person.telefono} />
                ))}
            </div>

        </div>
    )

}

export default App;