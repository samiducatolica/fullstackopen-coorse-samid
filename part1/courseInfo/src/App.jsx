const Header = () => {
    const course = 'Half Stack aplication development'
    return (
        <h1>{course}</h1>
    )
};

const Content = (props) => {
    return (
        <div>
            <p>
                {props.course[0].part} {props.course[0].exercises}
            </p>
            <p>
                {props.course[1].part} {props.course[1].exercises}
            </p>
            <p>
                {props.course[2].part} {props.course[2].exercises}
            </p>
        </div>
    )
};

const Total =(props)=> {
    return (
        <div>
            <p>Number of exercises {props.course[0].exercises + props.course[1].exercises +props.course[2].exercises}</p>
        </div>
    )
}

const App = () => {
    const course = [
        {part: 'Fundamentals of React', exercises: 10},
        {part: 'Using props to pass data', exercises: 7},
        {part: 'State of a component', exercises: 14},
    ]

    return (
        <>
            <Header/>
            <Content course={course} />
            <Total  course={course}  />
        </>
    )
}

export default App
