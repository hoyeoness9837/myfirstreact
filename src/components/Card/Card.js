import React from 'react';


//can bring the person properties that was assigned/given in the App.js 
const Card = (person) => {
  return (
    <div class='card'>
      <div class='card-body'>
        <h5 class='card-title'>Name: {person.name}</h5>
        <p class='card-text'>Favorite Movie : {person.movie}</p>
        <p class='card-text'>Favorite Song: {person.song}</p>
        <p class='card-text'>Favorite Food: {person.food}</p>
        <p class='card-text'>Favorite Game: {person.game}</p>
      </div>
    </div>
  );
};

export default Card;
