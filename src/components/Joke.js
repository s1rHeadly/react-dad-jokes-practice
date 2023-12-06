import React from 'react'

const Joke = ({joke, onDeleteJoke, onLikesUp, onLikesDown}) => {

  const {id, text, likes} = joke;

  return (
    <div className="joke">
    <h3>{text}</h3>
    <p>Likes: {likes}</p>
    <p>Is Favorite: yes</p>
    <button onClick={() => onLikesUp(id)}>👍</button>
    <button onClick={() => onLikesDown(id)}>👎</button>
    <button onClick={() => onDeleteJoke(id)}>Delete</button>
  </div>
  )
}

export default Joke