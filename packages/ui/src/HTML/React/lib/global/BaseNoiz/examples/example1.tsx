import styled from "styled-components";
enum layouts {
  main = "main",
  test = "test",
}
type layoutTypes = keyof typeof layouts;

enum styles {
  normal = "normal",
  redback = "redback",
}
type styleTypes = keyof typeof styles;

export interface BaseTestProps
  extends BaseNoizProps<layoutTypes, styleTypes> {}
export class BaseTestProps extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {}

export interface BaseTestState
  extends BaseNoizState<BaseTestProps> {}
export class BaseTestState extends BaseNoizState<BaseTestProps> {}

export interface BaseTest
  extends BaseNoiz<
    layoutTypes,
    styleTypes,
    BaseTestProps,
    BaseTestState
  > {}
export class BaseTest extends BaseNoiz<
  layoutTypes,
  styleTypes,
  BaseTestProps,
  BaseTestState
> {
  main = (p: BaseTestProps) => (
    <div className={p.className}>test it</div>
  );

  test = (p: BaseTestProps) => (
    <p className={p.className}>test</p>
  );

  layouts = [
    new this.Layout({
      name: layouts.main,
      component: this.main,
    }),
    new this.Layout({
      name: layouts.test,
      component: this.test,
    }),
  ];

  bold = styled(this.Html)`
    font-weight: bold;
  `;

  redBack = styled(this.Html)`
    background-color: red;
  `;

  styledlayouts = [
    new this.Style({
      name: styles.normal,
      style: this.bold,
    }),
    new this.Style({
      name: styles.redback,
      style: this.redBack,
    }),
  ];

  constructor(p: BaseTestProps) {
    super(p);
    this.state = {
      layout: p => (
        <div className={p.className}>bloom</div>
      ),
      style: styled(this.main)``,
    };
  }
}

export default function index() {
  return (
    <BaseTest layout="test" style="redback"></BaseTest>
  );
}
