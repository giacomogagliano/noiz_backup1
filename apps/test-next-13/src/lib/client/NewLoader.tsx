"use client";
import { Component, ReactNode, use } from "react";
type Props = {
  children: ReactNode;
  triggerKey: string;
  stateA: string;
  stateB: string;
  threshold?: number;
  rootMargin?: string;
};

class NewLoader_v1 extends Component<Props, {}> {
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
    let observer = new IntersectionObserver(this.observerCb, {
      threshold,
      rootMargin,
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
    if (entry.isIntersecting) setValue(this.props.stateA as unknown as string);
    else setValue(this.props.stateB as unknown as string);
  };
  triggerKey: string;
  rootMargin: string;
  threshold: number;
  stateA: string;
  stateB: string;
}

export const NewLoader = NewLoader_v1;
