import { Component, FC } from "react";
import styled from "styled-components";

const CardContainerStyled = styled.div`
  .card-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  .card {
    background-color: white;
    border: 1px solid black;
    border-radius: 0.25rem;
    padding: 0.5rem;
    transform: translateX(100px);
    opacity: 0;
    transition: 150ms;
    &.show {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
interface State {
  elements: JSX.Element[] | FC[];
}
interface Props {
  elements: JSX.Element[] | FC[];
  cb: (entry: IntersectionObserverEntry) => void;
  threshold?: number;
  rootMargin?: string;
  unobserve?: boolean;
  triggerkey?: string;
}

export class Loader extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      elements: props.elements,
    };

    this.observeElements = this.configureObserver(
      props.triggerkey,
      this.observerCb(props.cb),
      props.threshold,
      props.rootMargin
    );
  }

  render() {
    const { elements } = this.state;
    const Elements = this.Elements;
    return (
      <CardContainerStyled>
        <div id="elements-container">
          <Elements elements={elements}></Elements>
        </div>
      </CardContainerStyled>
    );
  }

  componentDidUpdate(
    _: Readonly<{}>,
    prevState: Readonly<State>,
    __?: any
  ): void {
    if (prevState.elements.length !== this.state.elements.length)
      this.observeElements(document);
  }

  componentDidMount() {
    this.observeElements(document);
  }

  observerCb = toggleShow => entries => {
    entries.forEach(toggleShow);
  };

  observeElement = observer => element => {
    observer.observe(element);
  };

  configureObserver = (key, observerCb, threshold, rootMargin) => document => {
    const elements = document.querySelectorAll(key);
    let observer = new IntersectionObserver(observerCb, {
      threshold,
      rootMargin,
    });
    elements.forEach(this.observeElement(observer));
  };

  observeElements;

  Elements = ({ elements }: { elements: JSX.Element[] | FC[] }) => (
    <>
      <>{elements}</>
    </>
  );
}
