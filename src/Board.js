import React, { useState } from 'react';
import CardApi from './Api/CardsAPI'

function Board({ deckId, remainingCards, currCards, drawCards, getNewDeck }) {

  return (
    <>
      {currCards.map(c =>
        <img key={c.code} src={c.image} alt={c.code} />
      )}
      {remainingCards > 0
        ?
        <button onClick={() => drawCards(deckId)}>
          Draw 4 Cards!
        </button>
        :
        <button onClick={() => getNewDeck()}>
          Get A  New Deck
        </button>
      }
    </>
  )
}

export default Board;