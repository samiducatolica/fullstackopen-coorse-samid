const Header = (props) => {

    return (
        <h1>{props.course}</h1>
    )
};

const Content = (props) => {

    return (
        <div>
            <p>
                {props.part.name} {props.part.exercises}
            </p>
        </div>
    )
};

const Total =(props)=> {
    return (
        <div>
            <p>Number of exercises {props.total}</p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack aplication development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }


    return (
        <>
            <Header course={course}/>
            <Content part={part1} />
            <Content part={part2} />
            <Content part={part3} />
            <Total  total={part1.exercises +  part2.exercises + part3.exercises}  />
        </>
    )
}

export default App
