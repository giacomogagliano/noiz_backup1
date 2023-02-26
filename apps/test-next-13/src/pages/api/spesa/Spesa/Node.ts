import { Types } from "@zionstate/zionbase/zionbase";
import { Types as Abstracts } from "@zionstate/zionbase/zionbase";

export interface Node<T> extends Types.DataStructure.Graph.BasicNode<T> {}

export abstract class Node<T> extends Types.DataStructure.Graph.BasicNode<T> {}
