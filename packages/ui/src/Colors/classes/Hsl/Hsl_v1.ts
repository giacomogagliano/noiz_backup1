export type HslCtorProps = {
  hue: string;
  saturation: string;
  luminance: string;
};

export class Hsl_v1 {
  value: string;
  constructor(props: HslCtorProps) {
    this.value = `hsl(${props.hue}, ${props.saturation}, ${props.luminance})`;
  }
}

export class Darkest extends Hsl_v1 {
  constructor(
    hue: string,
    saturation: string = "3%",
    luminance: string = "7%"
  ) {
    super({ hue, luminance, saturation });
  }
}

export class Dark extends Hsl_v1 {
  constructor(
    hue: string,
    saturation: string = "53%",
    luminance: string = "23%"
  ) {
    super({ hue, luminance, saturation });
  }
}

export class Main extends Hsl_v1 {
  constructor(
    hue: string,
    saturation: string = "100%",
    luminance: string = "50%"
  ) {
    super({ hue, luminance, saturation });
  }
}

export class Bright extends Hsl_v1 {
  constructor(
    hue: string,
    saturation: string = "37%",
    luminance: string = "70%"
  ) {
    super({ hue, luminance, saturation });
  }
}

export class Brightest extends Hsl_v1 {
  constructor(
    hue: string,
    saturation: string = "100%",
    luminance: string = "98%"
  ) {
    super({ hue, luminance, saturation });
  }
}
