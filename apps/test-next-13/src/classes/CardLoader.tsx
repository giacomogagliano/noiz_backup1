import { Component } from "react";
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
  cards: JSX.Element[];
  visibleCards: number;
  loadedCards: number;
  addOnLoad: number;
}
interface Props {
  cards: JSX.Element[];
  cb: (entry: IntersectionObserverEntry) => void;
  visibleCards?: number;
  addOnLoad?: number;
  classname: string;
  threshold?: number;
  rootMargin?: string;
}

export class CardLoader extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      cards: props.cards,
      visibleCards: props.visibleCards ? props.visibleCards : 20,
      loadedCards: 0,
      addOnLoad: props.addOnLoad ? props.addOnLoad : 20,
    };

    this.observeCards = this.configureObserver(
      props.classname,
      this.observerCb(props.cb),
      props.threshold,
      props.rootMargin
    );
  }

  render() {
    const { cards, loadedCards, visibleCards } = this.state;
    const Cards = this.Cards;
    return (
      <CardContainerStyled>
        <div className="card-container">
          <Cards
            cards={cards}
            loadedCards={loadedCards}
            visibleCards={visibleCards}
          ></Cards>
          <button onClick={this.handleLoadMore}>Load more</button>
        </div>
      </CardContainerStyled>
    );
  }

  componentDidUpdate(
    _: Readonly<{}>,
    prevState: Readonly<State>,
    __?: any
  ): void {
    if (prevState.cards.length !== this.state.cards.length)
      this.observeCards(document);
    if (prevState.loadedCards !== this.state.loadedCards)
      this.observeCards(document);
  }

  componentDidMount() {
    this.observeCards(document);
  }

  observerCb = toggleShow => entries => {
    entries.forEach(toggleShow);
  };

  observeCard = observer => card => {
    observer.observe(card);
  };

  configureObserver =
    (classname, observerCb, threshold, rootMargin) => (document: Document) => {
      const cards = document.querySelectorAll<HTMLElement>(classname);
      let observer = new IntersectionObserver(observerCb, {
        threshold,
        rootMargin,
      });
      cards.forEach(this.observeCard(observer));
    };

  observeCards;

  Cards = ({
    cards,
    loadedCards,
    visibleCards,
  }: {
    cards: JSX.Element[];
    loadedCards: number;
    visibleCards: number;
  }) => (
    <>
      <>{cards.slice(0, loadedCards + visibleCards)}</>
    </>
  );

  handleLoadMore = () => {
    this.setState({
      loadedCards: this.state.loadedCards + this.state.addOnLoad,
    });
  };
}
