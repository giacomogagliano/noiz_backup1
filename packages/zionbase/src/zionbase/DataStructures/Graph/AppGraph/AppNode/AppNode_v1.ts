export interface IAppNode_v1<
  S extends string = string,
  A extends string = string,
  C extends string = string
> {
  id: S;
  actions?: A[];
  children?: C[];
}

export interface AppNode_v1<
  S extends string = string,
  A extends string = string,
  C extends string = string
> {
  id: S;
  actions?: A[];
  children?: C[];
}

export interface AppNode_v1Props<
  S extends string = string,
  A extends string = string,
  C extends string = string
> {
  id: S;
  actions?: A[];
  children?: C[];
}

export class AppNode_v1<
  S extends string = string,
  A extends string = string,
  C extends string = string
> implements IAppNode_v1<S, A, C>
{
  constructor(props: AppNode_v1Props<S, A, C>) {
    this.id = props.id;
    this.actions = props.actions;
    this.children = props.children;
  }
  next(children: C[]) {
    this.children = children;
    return this;
  }
  setActions(action: A[]): this;
  setActions(action: A): this;
  setActions(action: A | A[]): this {
    if (Array.isArray(action)) this.actions = action;
    else this.actions?.push(action);
    return this;
  }
}

export type AppNode_v1Ctor<
  S extends string = string,
  A extends string = string,
  C extends string = string
> = {
  new (props: AppNode_v1Props<S, A, C>): AppNode_v1;
};

export const AppNode_v1Ctor: AppNode_v1Ctor = AppNode_v1;

export type getNodeId_v1<T> = T extends AppNode_v1<
  infer X
>[]
  ? X
  : never;
