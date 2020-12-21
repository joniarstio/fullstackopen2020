import React from 'react';

const Header = ({ course }) =>
    <h2>{course}</h2>;

const Content = ({ parts }) => (
    <div>{parts.map(({ name, exercises, id }) => (<Part key={id} exercises={exercises} name={name} />))}</div>
);

const Part = ({ name, exercises }) => (
    <div>{name} {exercises}</div>
);

const Total = ({ parts }) => {
    let totalExercises = parts.reduce((acc, curr) => acc + curr.exercises, 0);
    return <div style={{fontWeight: 'bold'}}>Total of {totalExercises} exercises</div>;
};

const Course = ({ course }) => (
    <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
);

export default Course;