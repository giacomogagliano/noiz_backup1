import { Text } from "ink";
import React, { Component, ReactNode } from "react";

export interface IApp_v1 {
  name: string;
}

export interface App_v1 extends Component {
  name: string;
}

export class App_v1 extends Component implements IApp_v1 {
  constructor(props: {}, name: string) {
    super(props);
    this.name = name;
  }
  override render(): ReactNode {
    return <Text>Ciao</Text>;
  }
}

export type app_v1Ctor = {
  new (props: {}, name: string): App_v1;
};

export const App_v1Ctor: app_v1Ctor = App_v1;
