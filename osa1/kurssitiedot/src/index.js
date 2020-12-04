import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
};

const Content = (props) => {
  return (
    <div>{props.parts.map(part => <Part part={part} />)}</div>
  )
};

const Part = (props) => {
  return <div>{props.part.name} {props.part.exercises}</div>
};

const Total = (props) => {
  let totalExercises = 0;

  props.parts.forEach(part => {
    totalExercises += part.exercises;
  })
  return (
    <div>Number of exercises {totalExercises}</div>
  )
};


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));