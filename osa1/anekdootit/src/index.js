import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = ( props ) => {
  const [ selected, setSelected ] = useState(0);
  const [ votes, setVotes ] = useState([ 0, 0, 0, 0, 0, 0 ]);

  const handleNextButton = () => 
    setSelected( Math.floor( Math.random() * anecdotes.length )); 
  
  const handleVoteButton = () => {
    let vote = [ ...votes ];
    vote[ selected ] += 1;
    setVotes( vote );
  };

  const Button = ({ children, handleClick }) =>
    children ? <button onClick={ handleClick }>{ children }</button> : null;


  return (
    <div>
      { props.anecdotes[ selected ] }
      <p>{ votes[ selected ] }</p>
      <div><Button handleClick={ handleVoteButton }>vote</Button>
            <Button handleClick={ handleNextButton }>next anecdote</Button></div>
      <div>
        <p><strong>Anecdote with most votes</strong></p>
        <p>{ props.anecdotes[ votes.indexOf(Math.max(...votes)) ]}</p>
        </div>
    </div>
  )
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
);