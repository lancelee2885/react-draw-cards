import axios from 'axios';

const BASE_URL = 'https://deckofcardsapi.com/api/deck/';
const DRAW_NUM = 4;

class CardApi {

  static deckId;
  static cardLeft;

  static async getDeck() {
    let url = BASE_URL + 'new/shuffle/?deck_count=1'
    try {
      let res = await axios({method: 'GET', url: url})
      this.deckId = res.data.deck_id;
      this.cardLeft = res.data.remaining;

    } catch (err) {
      console.log("API Error:", err.response)
    }
  }

  static async drawCards(id) {
    let url = BASE_URL + `${this.deckId}/draw/?count=${DRAW_NUM}`;
    try {
      let res = await axios({method: 'GET', url: url});
      return res.data
    } catch (err) {
      console.log("API Error: ", err);
    }
  }

}

export default CardApi