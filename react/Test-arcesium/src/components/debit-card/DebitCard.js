import React, { useEffect, useState } from "react";
import "./DebitCard.css";
import cards from "../../cards.json";
export const DebitCard = () => {
  const [selectedIndex, setIndex] = useState(0);
  const [isEncrypted, toggleSecurityType] = useState(true);
  let cardList;
  let selectedBankDetail;
  const decryptCard = (type = false) => {
    toggleSecurityType(type);
  };

  setCardDetails(cards[selectedIndex]);

  const cardClickHandler = (e) => {
    const selectedIndex = e.target?.dataset?.index;
    if (selectedIndex) {
      setIndex(selectedIndex);
      decryptCard(true);
    }
  };
  useEffect(() => {
    cardList = cards.map((card, index) => {
      return (
        <div
          className="list-card"
          key={index}
          data-index={index}
          data-testid={`list-card-${index}`}
        >
          <p className="list-card-title" data-index={index}>
            {card.name}
          </p>
        </div>
      );
    });

    function setCardDetails(card) {
      selectedBankDetail = (
        <div
          className="debit-card-body"
          data-testid="debit-card-body"
          onClick={decryptCard}
        >
          <p className="debit-card-bank" data-testid="debit-card-bank-name">
            {card.bank}
          </p>
          <p className="debit-card-no" data-testid="debit-card-no">
            {isEncrypted ? "XXXXXXXXXXXX" : card.number}
          </p>
          <br />
          <div
            style={{ height: "45px", backgroundColor: "black" }}
            className="debit-card-stripe"
          ></div>
          <p>
            <span
              className="debit-card-holder-name"
              data-testid="debit-card-holder-name"
            >
              {card.name}
            </span>
            <span
              className="debit-card-date"
              data-testid="debit-card-expiry-date"
            >
              {isEncrypted ? "XX/XX" : card.expiry}
            </span>
            <span className="debit-card-cvv" data-testid="debit-card-cvv">
              {isEncrypted ? "XXX" : card.cvv}
            </span>
          </p>
        </div>
      );
    }
  }, [selectedIndex]);

  return (
    <div className="mt-50 layout-column justify-content-center align-items-center">
      <div className="card outlined" style={{ width: "1000px" }}>
        <div data-testid="debit-card">
          <h3 style={{ textAlign: "center" }}>Card Details</h3>
          <br />
          {selectedBankDetail}
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>Cards List</h3>
          <div
            className="debit-card-list"
            data-testid="debit-card-list"
            onClick={cardClickHandler}
          >
            {cardList}
          </div>
        </div>
      </div>
    </div>
  );
};
