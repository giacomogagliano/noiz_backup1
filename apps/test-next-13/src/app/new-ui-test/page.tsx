"use client";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const CradContainerStyled = styled.div`
  .card-conainer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  .card {
    background-color: white;
    border: 1px solid black;
    border-radius: 0.25rem;
    padding: 0.5rem;
    transform: translateX(100px);
    opacity: 0;
    transition: 150ms;
    &.show {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

function index() {
  const [cards, setCards] = useState<NodeListOf<Element> | []>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      {
        threshold: 1,
      }
    );
    const cardElements = document.querySelectorAll(".card");
    setCards(cardElements);
    cardElements.forEach(card => {
      observer.observe(card);
    });
  }, []);

  return (
    <CradContainerStyled>
      <div className="card-conainer">
        <div className="card ">This is the first card</div>
        <div className="card">This is a card</div>
        <div className="card">This is a card</div>
        <div className="card">This is a card</div>
        <div className="card">This is a card</div>
        <div className="card">This is a card</div>
        <div className="card">This is a card</div>
        <div className="card">This is a card</div>
        <div className="card">This is a card</div>
        <div className="card">This is a card</div>
        <div className="card">This is a card</div>
        <div className="card">This is a card</div>
        <div className="card">This is a card</div>
        <div className="card">This is a card</div>
        <div className="card">This is a card</div>
        <div className="card">This is the last card</div>
      </div>
    </CradContainerStyled>
  );
}
export default index;
