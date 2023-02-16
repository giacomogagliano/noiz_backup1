"use client";

import React, { Component } from "react";
import styled from "styled-components";
import { CardLoader } from "../../lib/client/CardLoader";

function Index() {
  let cards: JSX.Element[] = [];
  for (let i = 0; i < 500; i++) {
    cards.push(
      <div key={i} className="card">
        This is a card
      </div>
    );
  }

  const toggleShow = (entry: IntersectionObserverEntry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  };

  return (
    <CardLoader
      cards={cards}
      visibleCards={20}
      addOnLoad={15}
      cb={toggleShow}
      classname=".card"
      threshold={1}
    ></CardLoader>
  );
}

export default Index;
