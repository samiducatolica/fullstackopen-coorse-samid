import {useState, useEffect} from "react";
import personService from './services/persons.js'

const FormNewPerson = (props) => {
    return (
        <form onSubmit={props.handleNameSubmit}>
            <div>
                name: <input
                value={props.newName}
                onChange={props.handleNameChange}
            />
            </div>
            <div>
                telefono: <input
                value={props.newNumber}
                onChange={props.handleNumberChange}
            />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

const Filter = (props) => {
    return (
        <div>
            Filtrar por nombre: <input
            value={props.findName}
            onChange={props.handleFindChange}
        />
        </div>
    )
}

const Name = (props) => {
    // console.log('Comp Name', props);
    return (
        <div>
            {props.name} - {props.telefono}  <button onClick={props.deletePerson}>Borrar</button>
        </div>
    )
}

const PersonsList = ({persons, findName,deletePersons}) => {
    if (!findName) {
        return (
            <div>
                <strong>Debug</strong>:
                {persons.map((person) => (
                    <Name key={person.id}
                          name={person.name}
                          telefono={person.number}
                          deletePerson={() => deletePersons(person.id)}
                        />
                ))
                }

            </div>
        )
    } else {
        console.log('Filtrando por nombre:', findName);
        const filteredPersons = persons.filter(elemento => elemento.name.toLowerCase().indexOf(findName.toLowerCase()) > -1)
        return (
            <div><strong>Debug</strong>:
                {filteredPersons.map((person) => (
                    <Name key={person.id} name={person.name} telefono={person.number}/>))}
            </div>
        )
    }
}


const App = () => {
    const [persons, setPersons] = useState([ ])
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [findName, setFindName] = useState('');


    const deletePersonOf = (id) => {
        if(window.confirm('¿Seguro que quieres borrar este contacto?')) {
            personService.remove(id)
                .then(respose => {
                    console.log('Respuesta de la API al borrar:', respose);
                    setPersons(persons.filter(persons=> persons.id !== id))
                })
        }

    }

    const personasApi =() => {
        personService.getAll()
            .then((respuesta) =>{
                // console.log('Respuesta de la API:', respuesta);
                setPersons(respuesta)
            })
    }

    useEffect(personasApi, []);

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
        const newPerson = {
            name: newName,
            number: newNumber,
        }
        //variable de validacion
        const validation = persons.findIndex(p => p.name === newPerson.name);

        //validacion de nombre
        if (validation !== -1) {
            alert(`${newPerson.name} ya existe en el ditectorio`);
        } else {
            //crea nuevo contacto
            personService.create(newPerson)
                .then(respuesta => {
                    // console.log('Respuesta de la API al crear:', respuesta.data);
                    setPersons(persons.concat(respuesta))
                })
            setNewName('')
            setNewNumber('');
        }
    }//1.86 m vencido



    return (
        <div>
            <h2>Phonebook</h2>
            <Filter findName={findName} handleFindChange={handleFindChange}/>
            <h2>Agregar un nuevo registro</h2>
            <FormNewPerson
                newName={newName}
                newNumber={newNumber}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
                handleNameSubmit={handleNameSubmit}
            />
            <h2>Numbers</h2>
            <PersonsList persons={persons} findName={findName} deletePersons={deletePersonOf}/>


        </div>
    )

}

export default App;