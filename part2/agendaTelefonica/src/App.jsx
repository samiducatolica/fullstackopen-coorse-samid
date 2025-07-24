import {useState} from "react";

const Name = (props) => {
    // console.log('Comp Name', props);
    return (
        <div>
            <p>{props.name} - {props.telefono} </p>

        </div>
    )
}

const FilteredPersons = ({persons, findName}) => {
    if (!findName) {
        // console.log('No hay nombre para filtrar');
        // console.log('FilteredPersons', persons, findName);
        return (
            <div>
                {persons.map((person) => (<Name key={person.id} name={person.name} telefono={person.telefono}/>))}
            </div>
        )
    } else {
        console.log('Filtrando por nombre:', findName);
        const filteredPersons = persons.
        filter(elemento => elemento.name.toLowerCase().indexOf(findName.toLowerCase()) > -1)
        return (
            <div>
                {filteredPersons.map((person) => (<Name key={person.id} name={person.name} telefono={person.telefono}/>))}
            </div>
        )
    }
}

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Samid', telefono: '123456789', id:1},
        {name: 'Amaury', telefono: '123456789', id:2},
        {name: 'Jose', telefono: '123456789', id:3},
        {name: 'Aberto', telefono: '123456789', id:4},
        {name: 'Maria', telefono: '123456789', id:5},
    ])

    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [findName, setFindName] = useState('');

    //Manejadores de eventos
    // Nombre
    const handleNameChange = (event) => {
        // console.log(event.target.value)
        setNewName(event.target.value)
    }

    //Telefono
    const handleNumberChange = (event) => {
        // console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    //Buscar por nombre
    const handleFindChange = (event) => {
        // console.log(event.target.value)
        setFindName(event.target.value)
    }

    //Envio y validacion de formulario
    const handleNameSubmit = (event) => {
        event.preventDefault();
        const NewPerson = {
            name: newName,
            telefono: newNumber,
            id: persons.length + 1
        }
        //variable de validacion
        const validation = persons.findIndex(p => p.name == NewPerson.name);

        //validacion de nombre
        if (validation != -1) {
            alert(`${NewPerson.name} ya existe en el ditectorio`);
        } else {
            //crea nuevo contacto
            setPersons(persons.concat(NewPerson));
            setNewName('')
            setNewNumber('');
        }
    }//1.86 m vencido

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                Filtrar por nombre: <input
                value={findName}
                onChange={handleFindChange}
            />
            </div>
            <h2>Agrega un nuevo registro</h2>
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
                <FilteredPersons persons={persons} findName={findName}/>
            </div>

        </div>
    )

}

export default App;