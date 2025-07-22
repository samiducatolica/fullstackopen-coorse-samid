const Header = (props) => {
    //  console.log(props)
    return (
        <h2>{props.course.name}</h2>
    )
};

const Content = (props) => {
    const content = props.course.parts
    // console.log(props)
    return (
        <div>
            {content.map(item =>
                <p key={item.id}>
                    {item.name} {item.exercises}
                </p>
            )}
        </div>
    )
};

const Total = (props) => {
    return (
        <div>
            <p>
                <strong>
                    Total of {
                        props.course.parts.reduce((sum, value) => {
                        return sum + value.exercises
                    }, 0)
                    } exercises
                </strong>
            </p>
        </div>
    )
}

const Course = ({props}) => {
    // console.log(props)
    return (
        <div>
            <Header course={props.course}/>
            <Content course={props.course}/>
            <Total course={props.course}/>

        </div>
    )
}

const App = () => {
    const course = [{
        id: 1,
        name: 'Half Stack aplication development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    }, {
        id: 2,
        name: 'Node.js',
        parts: [
            {
                name: 'Routing',
                exercises: 3,
                id: 1
            },
            {
                name: 'Middlewares',
                exercises: 7,
                id: 2
            }
        ]
    }]

    return (
        <div>
            <h1>Web development curriculum</h1>
            {course.map(item =>
                <Course key={item.id} props={{course: item}} />
            )}
        </div>
    )
}

export default App
