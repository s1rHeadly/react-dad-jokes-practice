
import { useEffect, useReducer} from "react";
import { v4 as uuidv4 } from 'uuid';

import Joke from "./components/Joke.js";
import JokeForm from "./components/JokeForm.js";


// initial state with local storaage
// gotta use this method and not return like we do for state local storage
const initialState = JSON.parse(localStorage.getItem('allJokes')) || [];


function jokeReducer(state, action){
  
  switch (action.type) {
    case 'addJoke':
      return [...state, action.payload]
   
    case 'deleteJoke':
      return state.filter((item) => item.id !== action.payload)
    
    case 'likedJoke':
      return  state.map(item => {
        if (item.id === action.payload) {
            return { ...item, likes: item.likes + 1 };
          }
        return item;
      })
    
    case 'dislikedJoke':
      return state.map(item => {
        if (item.id === action.payload) {
          return { ...item, likes: item.likes - 1};
        }
        return item;
      })
    default:
      return state
  }
}

const App = () => {

const [jokeState, dispatch] = useReducer(jokeReducer, initialState)


 // functions
  function addJoke(joke){

     const jokeObj = {
      text: joke,
      id: uuidv4(),
      likes: 0,
     }
    
    dispatch({
      type: 'addJoke',
      payload: jokeObj,
    })
  }


 function deleteJoke(id){
     dispatch({
      type: 'deleteJoke',
      payload: id,
     })
  }


function likesUp(id){
  dispatch({
    type: 'likedJoke',
    payload: id,
  })
}


function likesDown(id){
  dispatch({
    type: 'dislikedJoke',
    payload: id,
  })
}


  //effects
  
useEffect(() => {
  localStorage.setItem('allJokes', JSON.stringify(jokeState))
}, [jokeState]);

  return (
    <div className="container">
    <h1>SVG Dad Jokes</h1>

    <JokeForm onAddJoke={addJoke}/>

    {jokeState.length > 0 && jokeState.map(joke => (
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
