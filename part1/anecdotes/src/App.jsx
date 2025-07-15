import  {useState} from 'react'


function App() {
    const anecdotes = [
        'Si te duele hazlo más seguido.',
        '¡Añadir mano de obra a un proyecto de software que se encuentra retrasado lo hace más tarde!',
        'El primer 90 por ciento del código representa el primer 10 por ciento del tiempo de desarrollo... El 10 por ciento restante del código representa el otro 90 por ciento del tiempo de desarrollo.',
        'Cualquiera puede escribir código que una computadora pueda entender. Los buenos programadores escriben código que los humanos pueden entender.',
        'La optimización prematura es la raíz de todos los males.',
        'Depurar es el doble de difícil que escribir el código desde el principio. Por lo tanto, si escribes el código con la mayor astucia posible, por definición, no eres lo suficientemente inteligente como para depurarlo.',
        'Programar sin un uso extremadamente intensivo de console.log es como si un médico se negara a utilizar radiografías o análisis de sangre para diagnosticar a sus pacientes.',
        'La única manera de ir rápido, es ir bien.'
    ]

    const [selected, setSelected] = useState(0)

    const randomAnecdote = () => {
        const randomIndex = Math.floor(Math.random() * anecdotes.length)
        setSelected(randomIndex);
    }

  return (
    <div>
        <p>{anecdotes[selected]}</p>
        <button onClick={randomAnecdote}>Next Anecdote</button>
    </div>
  )
}

export default App
