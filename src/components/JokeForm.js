import React, { useState } from 'react'

const JokeForm = ({onAddJoke}) => {
  const [joke, setJoke] = useState('')

  const handleInput = (e) => {
      const {target} = e;
        setJoke(target.value)
  }

  const handleJoke = (e) => {
      e.preventDefault();
      if(joke.trim().length > 3 && joke !== '' && joke !== null){
        onAddJoke(joke);
      }
      setJoke('')
  }


  return (
    <form onSubmit={handleJoke}>
      <label htmlFor="text">Add a terrible joke</label>
      <input
        type="text"
        id="text"
        value={joke}
        onChange={handleInput}
      />
      <button type="submit">Add Joke</button>
    </form>
  )
}

export default JokeForm