import React, { useEffect, useState } from 'react';
import CardApi from './Api/CardsAPI'
import Board from './Board';

function App() {

  let [deckId, setDeckId] = useState();
  let [remainingCards, setRemaining] = useState();

  useEffect(
    function getDeckOnMount() {
      async function getDeck() {
        await CardApi.getDeck()
        let deck = CardApi.deckId;
        let remaining = CardApi.cardLeft;
        setDeckId(deck);
        setRemaining(remaining);
      }
      getDeck();
    },
    []
  );


  return (
    <div className="App">
      <Board deckId={deckId} remainingCards={remainingCards}/>
    </div>
  );
}

export default App;
