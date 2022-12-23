import React from "react";
import { ChangeEvent } from "react";
import styled from "styled-components";
import { InputType } from "../../../lib/global";
import { InputProps } from "../Input";
import { Input_v2 } from "../Input/Input_v2";

enum layouts {
  main = "main",
}
enum styles {
  defaultStyle = "defaultStyle",
}

type layoutTypes = keyof typeof layouts;
type styleTypes = keyof typeof styles;

/**
 * TODO #32 @arianna sistemare i file per farli funzionare con
 * la nuova BaseNoiz:
 * - aggiungere gli enum standard. Ho creato uno snippet che
 *   te li fa. si trova in questa cartella
 * - fatti gli enum, vanno aggiunti i due type nei generici
 *   di BaseNoizProps, cosi :
 *   `BaseNoizProps<layoutTypes,styleTypes>`
 * - estendere la classe State di ogni file con la classe
 *   `BaseNoizState`.
 * - fatto quello va aggiunto `BaseNoizProps` come generico
 *   in `BaseNoizState`
 * - aggiungere i due types delle enum nei generici della
 *   classe principale (quella che estende BaseNoiz).
 * - cambiare il nome al componente nella classe e nominarlo
 *   main
 * - aggiungere un elemento `layouts` subito dopo il
 *   componente e iniziare un array
 * - nell'array creare `new this.Layout` con le info `name`
 *   e `component`
 * - rinominare lo stile in `defaultStyle`
 * - creare un array `styledlayouts` e inserirvici dei `new
 *   this.Style()` con le info necessarie.
 *
 * a questo punto dovrebbe funzionare tutto ok.
 */

export interface Label_v2Props
  extends BaseNoizProps<layoutTypes, styleTypes> {
  name: string;
  type: InputType;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | readonly string[];
  preventDefault?: boolean;
  min?: number;
  max?: number;
  step?: number;
}
export class Label_v2Props extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {}

export interface Label_v2State
  extends BaseNoizState<Label_v2Props> {}
export class Label_v2State extends BaseNoizState<Label_v2Props> {}

export interface Label_v2
  extends BaseNoiz<
    layoutTypes,
    styleTypes,
    Label_v2Props,
    Label_v2State
  > {}

export class Label_v2 extends BaseNoiz<
  layoutTypes,
  styleTypes,
  Label_v2Props,
  Label_v2State
> {
  static defaultProps: Label_v2Props = {
    layout: layouts.main,
    style: styles.defaultStyle,
    handleChange: () =>
      console.log("I will handle it, i swear!!"),
    name: "name",
    placeholder: "placeholder",
    type: "text",
  };
  constructor(props: Label_v2Props) {
    super(props);
    let state = new Label_v2State();
    state.layout = () => <></>;
    state.style = styled(this.Html)``;
    this.state = state;
  }
  main = (props: Label_v2Props) => {
    const {
      name,
      handleChange,
      placeholder,
      type,
      min,
      max,
      step,
      preventDefault,
      value,
    } = props;

    const inputProps: InputProps = new InputProps();
    inputProps.preventDefault = preventDefault;
    inputProps.handleChange = handleChange;
    inputProps.placeholder = placeholder;
    inputProps.value = value;
    inputProps.step = step;
    inputProps.type = type;
    inputProps.max = max;
    inputProps.min = min;
    return (
      <>
        <label className={props.className}>
          <p>{name}</p>
          <Input_v2 {...inputProps} />
        </label>
      </>
    );
  };

  layouts = [
    new this.Layout({
      name: layouts.main,
      component: this.main,
    }),
  ];

  defaultStyle = styled(this.Html)``;

  styledlayouts = [
    new this.Style({
      name: styles.defaultStyle,
      style: this.defaultStyle,
    }),
  ];
}
