import React from 'react'; // same as const React =require('react)
import './App.css';
import NavBar from './components/Navbar';
import List from './components/List';
import Card from './components/Card';
import Button from './components/Button';

const App = () => {
  return (
    <>
      <NavBar />
      <Button text='Props Button' one='something11' two='something12' />
      <Button text='Second Button' one='something12' two='something22' />
      <Button text='Third Button' one='something13' two='something23' />
      <List />
      <Card
        name='Hoyeon'
        movie='Frozen'
        song='Something About us by Daft Punk'
        food='Koean BBQ'
        game='LOL'
      />
      <Card
        name='Amanda'
        movie='Wreck It Ralph'
        song='50/50 by Vantage'
        food='Taco Bell'
        game='Animal Crossing'
      />
      <Card
        name='Pravin'
        movie='Pulp fiction'
        song='Creep by Radiohead'
        food='noodles'
        game='Kingdom hearts'
      />
      <Card
        name='Logan'
        movie='Wolf of Wallstreet'
        song='Stargazing by Travis Scott'
        food='?'
        game='Last of Us 2'
      />
    </>
  );
};

export default App;
