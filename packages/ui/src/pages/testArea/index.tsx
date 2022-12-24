import React from "react";
import styled, {
  css,
  DefaultTheme,
} from "styled-components";
import "../../HTML";
import { BasicColorStyle } from "../../HTML/React/lib/global";

const ContentArea = styled.div`
  place-self: center;
`;

interface ContainerProps {
  primary?: boolean;
  secondary?: boolean;
  border?: "thin" | "normal" | "thick";
}

// TODO #166 @giacomogagliano questa puo essere utile =)
const prop: (
  member: keyof BasicColorStyle
) => (
  props: { theme: DefaultTheme } & ContainerProps
) => string = member => props => {
  let result: string = "";
  if (props.primary) result = props.theme.primary[member];
  if (props.secondary)
    result = props.theme.secondary[member];
  return result;
};

const color = prop("color");

const backgroundColor = prop("backgroundColor");

const borderColor = prop("borderColor");

const areaBorderPadding = (padding: number) => css`
  color: ${color};
  padding: ${padding}rem;
  background-color: ${props =>
    props.theme.palette_ryb.orange.value};
  border: 0.1rem solid;
  border-color: ${borderColor};
  border-radius: 1rem;
  justify-content: space-between;
  > *:not(:last-child) {
    margin-bottom: 0.2rem;
  }
`;

const Container = styled.div<ContainerProps>`
  ${areaBorderPadding(1.5)}
  ///
  display: grid;
  grid-template-rows: auto 20rem auto;
  h1,
  h2,
  h3,
  h4,
  h5 {
    text-align: center;
  }
  #inner {
    ${areaBorderPadding(1)}
    background-color: ${props =>
      props.theme.palette_ryb.orange.setColor(3).value};
    ////
    #inner2 {
      ${areaBorderPadding(0.5)}
      background-color: ${props =>
        props.theme.palette_ryb.orange[70]};
    }
  }
`;

export default function index() {
  return (
    <ContentArea>
      <Container primary>
        <h1>Title here</h1>
        <img
          src="https://i.pinimg.com/736x/36/68/eb/3668eb8838a45af1887eba77ffc0e5af--ganja.jpg"
          height="100%"
          style={{ placeSelf: "center" }}
        ></img>
        <p>some text</p>
        <h2>Title here</h2>
        <p>some other text</p>
        <div id="inner">
          <p>
            the inner area dasdasd asdasdas dasdasd asdas
          </p>
          <p>povero pasquale</p>
          <div id="inner2">
            <h1>ciao</h1>
            <p>
              the inner area dasdasd asdasdas dasdasd asdas
            </p>
          </div>
        </div>
      </Container>
    </ContentArea>
  );
}
