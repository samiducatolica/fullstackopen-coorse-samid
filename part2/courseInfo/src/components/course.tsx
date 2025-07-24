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

export default Course;