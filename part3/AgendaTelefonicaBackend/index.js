const express = require('express');
const app = express()
app.use(express.json());

let persons = [
    {
        "id": 1, "name": "Arto Hellas", "number": "040-123456"
    }, {
        "id": 2, "name": "Ada Lovelace", "number": "39-44-5323523"
    }, {
        "id": 3, "name": "Dan Abramov", "number": "12-43-234345"
    }, {
        "id": 4, "name": "Mary Poppendieck", "number": "39-23-6423122"
    }
]

app.get('/api/persons',(request,response)=>{
    response.json(persons)
})

app.get('/api/persons/:id',(request,response)=>{
    const id = Number( request.params.id);
    const persona = persons.find(person=>person.id === id);

    if(persona){
       response.json(persona)
    }else {
        response.status(404).end('Not Found')
    }
})

app.delete('/api/persons/:id',(request,response)=>{
    const id = Number( request.params.id);
    const persona = persons.find(person=>person.id === id);
    if(persona){
        persons= persons.filter(person=>person.id !== id);
        response.status(204).end()
    }
})

const generateId=()=>{
    console.log('generando id')
    const id =Math.floor(Math.random()*1000);
    console.log(id)
    return id
}

app.post('/api/persons',(request,response)=>{
    const body = request.body
    // console.log(request.body)
    const existingPerson = persons.find(person=>person.name === request.body.name)
    if(!body.name || !body.number){
        return response.status(400).json({
            error: 'Name or number is required'
        })
    }else if(existingPerson){
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const record={
        name: request.body.name,
        number: request.body.number,
        id: generateId(),
    }

    persons= persons.concat(record)
    response.status(201).json(record)
})

app.get('/info',(request,response)=>{
    const peronsTotal= persons.length
    const hoy=new Date().toString()
    console.log(hoy)
    response.send(
        `<p>Phonebook has info for ${peronsTotal} persons</p> 
                <p>${hoy}</p>`
    )
})

const PORT = 3001
app.listen(PORT)
console.log(`Hello Server runing on port ${PORT}`)
