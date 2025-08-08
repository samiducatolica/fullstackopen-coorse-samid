const express = require('express');
const app = express()

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
