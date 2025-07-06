const  Hello = (props) => {
    console.log (props)
    return (
        <div>
            <p>
                Hello {props.name}, you are {props.age} years old.
            </p>
        </div>
    )
}

const  Footer= () =>{
    return (
        <div>
            greating app created by <a href='https://github.com/mluukkay'>mluukkay</a>

        </div>
    )
}
const  App = () => {
    const  friends=[
        { name :'Peter', age: 12 },
        {name:'Maya', age :13},
    ]

  return (
      <div>
          <p>{friends[0].name} {friends[0].age}</p>
          <p>{friends[1].name} {friends[1].age}</p>
      </div>
  )
}
export default App
