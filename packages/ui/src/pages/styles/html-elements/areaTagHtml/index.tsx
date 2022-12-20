import React from "react";
import {
  AreaTagHtml,
  Div,
  H1,
  Img,
  P,
} from "../../../../HTML";

function index() {
  return (
    <Div>
      <H1>The map and area elements</H1>
      <P>
        Click on the track you prefer to go to a new page
        and read more about that song:
      </P>
      <Img
        src="https://ipfs.io/ipfs/QmZLTPSWxjkZozWY45VmUrA4kLjWy3tJksjVZBKFtGqiiQ?filename=gotektracks.png"
        alt="Gotek's Tracks"
        useMap="#gotektracks"
        width="100%"
        height="100%"
      />
      <map name="gotektracks">
        <AreaTagHtml
          shape="rect"
          coords="7,557,1450,804"
          alt="Live Feat Kosmo"
          href="https://ipfs.io/ipfs/Qmb7AWnBtnekZw1kf9YFq2PW77KePGnottrXEtvBXcMQ55?filename=livefeatkosmo.png"
        />
        <AreaTagHtml
          shape="rect"
          coords="32,304,1448,516"
          alt="Odd Human"
          href="https://ipfs.io/ipfs/QmddfMnLt7WyTJ213rbJyonjjpsppGRi4EJMVzkip2burB?filename=oddhuman.png"
        />
        <AreaTagHtml
          shape="rect"
          coords="36,14,1455,260"
          alt="This is Go Tek"
          href="https://ipfs.io/ipfs/QmaJTjjE7wv8huA3imDW76dSeKnddBzUtTXAeBgEYSRVY1?filename=thisisgotek.png"
        />
      </map>
    </Div>
  );
}

export default index;
