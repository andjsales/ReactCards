import React from "react";
import { useAxios } from "./hooks"; // Import useAxios hook
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

function PlayingCardList() {
  const [cards, addCard] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/"); // Use useAxios hook

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={ () => addCard() }>Add a playing card!</button> {/* Use addCard function from useAxios here */ }
      </div>
      <div className="PlayingCardList-card-area">
        { cards.map(cardData => (
          <PlayingCard key={ cardData.id } front={ cardData.cards[0].image } />
        )) }
      </div>
    </div>
  );
}

export default PlayingCardList;
