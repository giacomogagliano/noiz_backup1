"use client";

import React, { Component } from "react";
import styled from "styled-components";
import { Loader } from "../../components/Loader";

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
    <Loader
      cards={cards}
      visibleCards={20}
      addOnLoad={15}
      cb={toggleShow}
      classname=".card"
    ></Loader>
  );
}

export default Index;
