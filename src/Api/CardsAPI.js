import axios from 'axios';

const BASE_URL = 'https://deckofcardsapi.com/api/deck/';

class CardApi {

  static deckId;
  static cardLeft;

  static async getDeck() {

    let url = BASE_URL + 'new/shuffle/?deck_count=1'

    try {
      let res = await axios({method: 'get', url: url})
      this.deckId = res.data.deck_id;
      this.cardLeft = res.data.remaining;

    } catch (err) {
      console.log("API Error:", err.response)
    }
  }

}

export default CardApi