import { createRef, RefObject } from "react";
import styled from "styled-components";

enum layouts {
  main = "main",
}
enum styles {
  defaultStyle = "defaultStyle",
}
type layoutTypes = keyof typeof layouts;
type styleTypes = keyof typeof styles;

interface ParentSize {
  width?: number;
  height?: number;
}
class ParentSize {}

export interface ItemsArea_v2Props
  extends BaseNoizProps<layoutTypes, styleTypes> {
  height: number;
  avatarSize: number;
  ref?: RefObject<HTMLDivElement>;
}

export class ItemsArea_v2Props extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {}

export interface ItemsArea_v2State {
  blockSize?: number;
  width?: number;
  columns?: number;
  parentSize: ParentSize;
}
export class ItemsArea_v2State extends BaseNoizState<ItemsArea_v2Props> {}

export interface ItemsArea_v2
  extends BaseNoiz<
    layoutTypes,
    styleTypes,
    ItemsArea_v2Props,
    ItemsArea_v2State
  > {
  itemsArea: RefObject<HTMLDivElement>;
}
export class ItemsArea_v2 extends BaseNoiz<
  layoutTypes,
  styleTypes,
  ItemsArea_v2Props,
  ItemsArea_v2State
> {
  static defaultProps = {
    layout: layouts.main,
    style: styles.defaultStyle,
  };
  ParentSize = ParentSize;
  rows = 14;
  columns = 8;
  setBlockSize = (blocksize: number) =>
    this.setState({ blockSize: blocksize });
  setWidth = (width: number) =>
    this.setState({ width: width });
  setParentSize = (parentSize: ParentSize) =>
    this.setState({ parentSize });
  handleParentSize() {
    if (!this.itemsArea.current) return;
    const itemsArea = this.itemsArea.current;
    const parent_ = itemsArea.parentElement;
    if (!parent_) return;
    const clientRec = parent_.getBoundingClientRect();
    if (!clientRec.height) return;
    if (!clientRec.width) return;
    const parentSize = new this.ParentSize();
    parentSize.width = clientRec.height;
    parentSize.height = clientRec.width;
    this.setParentSize(parentSize);
  }

  handleBlockAndWidth() {
    const parentSize = this.state.parentSize;
    if (!parentSize.height) return;
    if (parentSize.height === 0) return;
    const SCALE = 1000000000000;
    const ratio = this.calculateRatio(parentSize.height);
    const blockSize = this.scale(ratio, SCALE);
    const width = blockSize * this.columns;
    this.setBlockSize(blockSize);
    this.setWidth(width);
  }

  calculateRatio(height: number) {
    return height / this.rows;
  }

  scale(num: number, scale: number) {
    return Math.round(num * scale) / scale;
  }

  main = (props: ItemsArea_v2Props) => {
    return (
      <div
        ref={this.itemsArea}
        className={props.className}
      >
        {props.children}
      </div>
    );
  };

  layouts = [
    new this.Layout({
      name: layouts.main,
      component: this.main,
    }),
  ];

  defaultStyle = styled(this.Html)`
    display: grid;
    background-color: ${props =>
      props.theme.backgroundColor};
    grid-area: content;
    height: 100%;
    width: ${() => this.state.width}px;
    grid-auto-rows: ${() => this.state.blockSize}px;
    grid-template-columns: repeat(
      ${() => this.state.columns},
      ${() => this.state.blockSize}px
    );
    place-self: center;
  `;

  styledlayouts = [
    new this.Style({
      name: styles.defaultStyle,
      style: this.defaultStyle,
    }),
  ];

  constructor(props: ItemsArea_v2Props) {
    super(props);
    this.itemsArea = createRef();
    let state = new ItemsArea_v2State();
    state.layout = () => <></>;
    state.style = styled(this.Html)``;
    state.blockSize = 0;
    state.width = 0;
    state.columns = this.columns;
    state.parentSize = new this.ParentSize();
    this.state = state;
  }

  // debugState = true;

  didUpdate = (
    _: any,
    prevState: ItemsArea_v2State,
    __: any
  ) => {
    // const layout = prevState.layout !== this.state.layout;
    const style = prevState.style !== this.state.style;
    const parentSize =
      prevState.parentSize.height !==
      this.state.parentSize.height;
    style && this.handleParentSize();
    parentSize && this.handleBlockAndWidth();
  };
}
