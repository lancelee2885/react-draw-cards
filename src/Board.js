import React, { useState, useEffect } from 'react';
import CardApi from './Api/CardsAPI'

function Board({ deckId, remainingCards }) {

  const [currCards, setCurrCards] = useState([]);

  async function drawCards(id) {
    let cards = await CardApi.drawCards(id);
    setCurrCards(cards);
  }

  return (
    <>
      {currCards.map(c =>
        <img key={c.code} src={c.image} alt={c.code} />
      )}
      {remainingCards
        ?
        <button onClick={() => drawCards(deckId)}>
          Draw 4 Cards!
        </button>
        :
        <button onClick>
          Get A  New Deck
        </button>
      }
    </>
  )
}

export default Board;