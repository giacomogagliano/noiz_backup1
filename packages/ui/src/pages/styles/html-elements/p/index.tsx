import React from "react";
import styled from "styled-components";
import { P } from "../../../../HTML";

const Container = styled.div`
  display: inline;
  gap: 0.5rem;
  padding: 2rem;
  p {
    margin-left: 0.2rem;
    display: inline;
  }
`;

export default function index() {
  return (
    <Container>
      <P>
        Sono un P. Posso essere messo vicino ad altri P.
      </P>
      <P dimmed>Io sono un P, messo</P>
      <P dimmed bold>
        di fianco
      </P>
      <P dimmed>
        al P precedente, e la mia props `dimmed` è valutata
        "true".
      </P>
      <P>Per funzionare correttamente</P>
      <P bold>uno di fianco all'altro</P>
      <P>
        dobbiamo essere inseriti (noi P), all'interno di un
        container con `display: inline`".
      </P>
      <P>Posso anche essere usato per rendere un testo</P>
      <P italic>italic</P>
      <P>o</P>
      <P italic bold>
        italic-bold.
      </P>
      <br />
      <P light>Posso scrivere in maniera più leggera,</P>
      <P light>fine a diventare</P>
      <P lighter>super fine. Io sono superfine,</P>
      <P light>
        mentre io sono fine, non è che la differenza si
        noti molto.
      </P>
      <br />
      <P>ma posso anche essere</P>
      <P bold>bold</P>
      <P>oppure</P>
      <P bolder>bolder</P>
    </Container>
  );
}
