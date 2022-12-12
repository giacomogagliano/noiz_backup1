import { CSSProperties } from "react";
import {
  css,
  FlattenSimpleInterpolation,
} from "styled-components";

/**
 * @param attribute the Css attribute
 * @param defaultValue the default value for the attribute
 * @param props the props argument of the component
 * Usage:
 *
 * ```ts
 * // create a defaultValue css
 * const defaultHeight = css`
 *   height: 70%;
 * `;
 *
 * // when creating a styled div, inside the body of the css
 * // style create a code block and return an instance of
 * // this class.
 * const styleComponent = styled.div<{css_?:{height?:string}}>`
 *   ${props => new Css("height", defaultHeight, props).value}
 * `
 *
 * // TO RETRIEVE THE ACTUAL CSS, GET THE VALUE MEMBER IN THE
 * // CLASS
 * ```
 */
export class Css_v1<T extends utility.CssStyled> {
  static #kebabize(str: string) {
    return str
      .split("")
      .map((letter, idx) => {
        return letter.toUpperCase() === letter
          ? `${
              idx !== 0 ? "-" : ""
            }${letter.toLowerCase()}`
          : letter;
      })
      .join("");
  }
  static #checkCssAttribute<T extends utility.CssStyled>(
    attribute: keyof CSSProperties,
    defaultValue: FlattenSimpleInterpolation,
    props?: T
  ) {
    let result: FlattenSimpleInterpolation;
    if (props && props.css_ && props.css_[attribute]) {
      const attributeValue = props.css_[attribute];
      const string = `${Css_v1.#kebabize(
        attribute
      )}: ${attributeValue};`;
      result = css`
        ${string};
      `;
    } else result = defaultValue;
    return result;
  }
  value?: FlattenSimpleInterpolation;
  attributeValue?: CssAttributeValueTypes;
  kebabCase: string;
  constructor(attribute: keyof CSSProperties);
  constructor(
    attribute: keyof CSSProperties,
    defaultValue: FlattenSimpleInterpolation
  );
  constructor(
    attribute: keyof CSSProperties,
    defaultValue: FlattenSimpleInterpolation,
    props: { css_?: CSSProperties }
  );
  constructor(
    public attribute: keyof CSSProperties,
    public defaultValue: FlattenSimpleInterpolation = css``,
    public props?: T
  ) {
    this.kebabCase = Css_v1.#kebabize(attribute);
    this.value = Css_v1.#checkCssAttribute(
      attribute,
      defaultValue,
      props
    );
  }
}
