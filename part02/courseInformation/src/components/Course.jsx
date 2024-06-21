const Course= ({course}) =>{
    const Header=({title}) =>{
        return(
            <h1>{title}</h1>
        )
    }

    const Part= ({name, exercises})=>{
        return(
            <p> {name} {exercises}</p>
        )
    }

    const Content= ({parts})=>{
        return(
            <>
            {
                parts.map(part =>
                <Part key={part.id} name={part.name} exercises={part.exercises}/>
                )
            }
            </>
        )       
    }

    const Total= ({parts}) => {
        const total = parts.reduce((s, p) => {
            return s + p.exercises;
          },0)

        return(
            <div><b>total of {total} exercises</b></div>
        )
    }

    return(
        <>
            <Header title={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </>
    )
}

export default Course