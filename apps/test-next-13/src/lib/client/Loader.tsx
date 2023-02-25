"use client";
import { Component, ReactNode, use } from "react";
import { FlattenSimpleInterpolation } from "styled-components";

type Props = {
  children: ReactNode;
  triggerKey: string;
  stateA: FlattenSimpleInterpolation;
  stateB: FlattenSimpleInterpolation;
  threshold?: number;
  rootMargin?: string;
  callBack?: "cb" | "cb2";
  root?: Document | Element;
};

interface LoaderProcessorProps {
  entry: IntersectionObserverEntry;
  setValue: (value: string) => void;
  stateA: string;
  stateB: string;
}

interface LoaderProcessor {
  (props: LoaderProcessorProps): void;
}
/**
 * Questa classe crea degli elementi mutabili, le quali
 * mutazione è fatta scatenare da un elemento trigger.
 * La mutazione è la stessa per tutti gli elementi da
 * mutare.
 *
 * ### Elementi Mutabili
 *
 * Gli elementi mutabili vengono passati al Loader come
 * children e devono essere composti in modo tale che
 * l'elemento piu esterno abbia un id equivalente al valore
 * parametro `triggerKey`.
 *
 * ### Strategie
 *
 * Questa classe può essere usata con 3 strategie:
 *
 * - cb_1: la mutazione avviene ogni volta che l'elemento
 *   interseziona il root
 * - cb_2: la mutazione avviene solo quando l'elemento
 *   interseziona il root quando il valore dell'intersezione
 *   con l'asse Y è diverso da zero (ovvero quando
 *   interseziona la parte inferiore del root)
 *
 * @param children Sono gli elementi che verranno mutati
 * @param triggerKey
 * @param children
 * @param triggerKey
 * @param stateA
 * @param stateB
 * @param threshold
 * @param rootMargin
 * @param callBack
 * @param root
 */
class Loader_v1 extends Component<Props, {}> {
  render(): ReactNode {
    return <>{this.props.children}</>;
  }
  componentDidMount(): void {
    this.configureObserver(document);
  }
  configureObserver = (document: Document) => {
    const elements = document.querySelectorAll(this.props.triggerKey);
    let threshold = this.props.threshold;
    let rootMargin = this.props.rootMargin;
    let root = this.props.root;
    let observer = new IntersectionObserver(this.observerCb, {
      threshold,
      rootMargin,
      root,
    });
    elements.forEach(this.observeElement(observer));
  };
  observeElement = (observer: IntersectionObserver) => (element: Element) => {
    observer.observe(element);
  };
  observerCb: IntersectionObserverCallback = entries => {
    entries.forEach(this.cb);
  };
  cb = (entry: IntersectionObserverEntry) => {
    function setValue(value: string) {
      entry.target.setAttribute("style", value);
    }
    let stateA: string = this.props.stateA as unknown as string;
    let stateB: string = this.props.stateB as unknown as string;
    let cb1 = this.props.callBack === "cb";
    if (cb1) this.cb_1({ entry, setValue, stateA, stateB });
    else this.cb_2({ entry, setValue, stateA, stateB });
  };
  cb_1: LoaderProcessor = ({ entry, setValue, stateA, stateB }) => {
    if (entry.isIntersecting) setValue(stateA);
    else setValue(stateB);
  };
  cb_2: LoaderProcessor = props => {
    if (props.entry.intersectionRect.y) this.cb_1(props);
  };

  triggerKey: string;
  rootMargin: string;
  threshold: number;
  stateA: string;
  stateB: string;
}

export const Loader = Loader_v1;
