import React from "react";
import { Item } from "../../../../HTML/React/classes";

export default function index() {
  return (
    <Item
      src="https://i.pinimg.com/originals/14/85/51/148551a52fb4f927f78ca242fc85654b.jpg"
      layout="main"
      style="defaultStyle"
      data={{
        creator: "The DYBERDOGs Makers",
        currency: "USDC",
        description:
          "WARNING! This cyberdog is out of control! He is very dangerous, he takes apart cyberdogs that enter his territory. He came here to find a partner in the gang. ",
        highestBid: "100",
        info: "infos here",
        royalties: "10%",
        title: "CYBERDOG #010 - THE RIPPER",
        collectionTitle: "CYBERDOGs",
      }}
    ></Item>
  );
}
