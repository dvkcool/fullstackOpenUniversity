const Header = (props) => {
  return(
    <h2>{props.course}</h2>
  )
}

const Content = (props) => {
  return(
    <div>
      {props.part.map(parti => {
        return <Part key={parti.id} part={parti}/>
      })}
    </div>
  )
}

const Part = (props) => {
  return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
  )
}

const Total = (props) => {
  return (
    <p>
      <b>Total of {props.part
        .map(parti => parti.exercises)
        .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue
        },0)}
         exercises
      </b></p>
  )
}

const Course = ({course}) => {
  return(
  <>
    <Header course={course.name}/>
    <Content part={course.parts}/>
    <Total part={course.parts}/>
  </>
  );
}

export default Course