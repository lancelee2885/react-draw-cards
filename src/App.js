import React, { createRef, useEffect, useState } from 'react';
import CardApi from './Api/CardsAPI'
import Board from './Board';
import {useSelector, useDispatch } from 'react-redux';
import {fetchDeckId} from './reducers/GlobalReducer';


function App() {

  const [deckId, setDeckId] = useState();
  const [remainingCards, setRemaining] = useState();
  const [currCards, setCurrCards] = useState([]);


  const dispatch = useDispatch();
  let x = useSelector((state) => (state.deckId));

  async function drawCards(id) {
    let res = await CardApi.drawCards(id);
    setCurrCards(res.cards);
    setRemaining(res.remaining);
  }

  async function getNewDeck() {
    await CardApi.getDeck()
    let deck = CardApi.deckId;
    let remaining = CardApi.cardLeft;
    setDeckId(deck);
    setRemaining(remaining);
    setCurrCards([]);
  }

  // useEffect(
  //   function getDeckOnMount() {
  //     async function getDeck() {
  //       await CardApi.getDeck()
  //       let deck = CardApi.deckId;
  //       let remaining = CardApi.cardLeft;
  //       setDeckId(deck);
  //       setRemaining(remaining);
  //     }
  //     getDeck();
  //   },
  //   []
  // );

  useEffect(
    function getDeckOnMountRedux() {
      function getDeckRedux() {
        dispatch(fetchDeckId())

      }
      getDeckRedux();
    },
    []
  );


  return (

    <div className="App">
        <h1>Deck Id is {x}</h1>
        <Board deckId={deckId}
          remainingCards={remainingCards}
          currCards={currCards}
          drawCards={drawCards}
          getNewDeck={getNewDeck} />
    </div>


  );
}

export default App;
