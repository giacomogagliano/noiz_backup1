"use client";
import styled, { css } from "styled-components";
import { Section, Container, BigHeading, Paragraph } from "./StylesSheet";

//

export const Image18 = css`
  display: block;
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
`;
export const Dark = css`
  background-color: #f8f9fc;
`;
export const AreaWhy = styled.div`
  ${Section}
  ${Dark}
  #container-why {
    ${Container}
    #big-heading-why {
      ${BigHeading}
    }
    #paragraph-why {
      ${Paragraph}
    }
    #image- {
      ${Image18}
    }
  }
`;
