import CardApi from "../Api/CardsAPI";


const initialState = {
  deckId: ''
}

export const fetchDeckId = function () {
  return async (dispatch, getState) => {
    await CardApi.getDeck();
    dispatch({
      type: 'getDeck',
      payload: CardApi.deckId
    })
    console.log('fetchDeckId', CardApi.deckId);
  }
}

function GlobalReducer(state=initialState, action){

  switch(action.type){
    case 'getDeck' :
      state.deckId = action.payload
      return state

    default:
      return state
  }
}

export default GlobalReducer;