
import { v4 as uuidv4 } from 'uuid';
import Joke from "./components/Joke.js";
import JokeForm from "./components/JokeForm.js";
import { useState } from "react";

const App = () => {
// state
 const [allJokes, setAllJokes] = useState([])


 // functions
  function addJoke(joke){
     const jokeObj = {
      text: joke,
      id: uuidv4(),
      likes: 0,
     }

     setAllJokes((prevState) => (
      [...prevState, jokeObj]
    ))  
  }

 function deleteJoke(id){
     setAllJokes((prevState) => (
       prevState.filter((item) => item.id !== id)
     ))
  }


function likesUp(id){
  setAllJokes(prevState =>
    prevState.map(item => {
      if (item.id === id) {
        return { ...item, likes: item.likes + 1 };
      }
      return item;
    })
  );
}


function likesDown(id){
  setAllJokes(prevState =>
    prevState.map(item => {
      if (item.id === id) {
        return { ...item, likes: item.likes - 1};
      }
      return item;
    })
  );
}




  //effects

  return (
    <div className="">
    <h1>SVG Dad Jokes</h1>

    <JokeForm onAddJoke={addJoke}/>

    {allJokes.length > 0 && allJokes.map(joke => (
      <Joke
      joke={joke}
      key={joke.id}
      onDeleteJoke={deleteJoke}
      onLikesUp={likesUp}
      onLikesDown={likesDown}

      />
    ))}

  

  </div>
  );
}

export default App;
