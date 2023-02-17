// reexporting zionbase in the root for backward compatibility
import * as _utils from "./utils";
import * as _zionbase from "./zionbase";

/////////// utils
///////////////js
import type { ZionError_v1 } from "./utils/js/ZionError/ZionError_v1";
import type { ZionRegExp_v1 } from "./utils/js/ZionRegExp/ZionRegExp_v1";
///////////////node
import type { runProcess_v1 } from "./utils/node/process/runProcess/runProcess_v1";
import type { handleFetch_v1 } from "./utils/node/fetch/handleFetch/handleFetch_v1";
import type { swtch_v1 } from "./utils/node/util/ZionUtils/swtch/swtch_v1";
import type { dataGuard_v1 } from "./utils/node/util/ZionUtils/guard/dataGuard/dataGuard_v1";
import type { guard_v1 } from "./utils/node/util/ZionUtils/guard/guard_v1";
import type { stringifyBase64_v1 } from "./utils/node/util/ZionUtils/strings/stringifyBase64/stringifyBase64_v1";
import type { IZionUtils_v1 } from "./utils/node/util/ZionUtils/ZionUtils_v1";
_utils.js.lib;
export const utils: utilsType = _utils;

interface utilsType extends lib {
  ZionError: typeof ZionError_v1;
  ZionRegExp: typeof ZionRegExp_v1;
  node: {
    process: { runProcess: runProcess_v1 };
    fetch: { handleFetch: handleFetch_v1 };
  } & lib;
  js: {
    ZionError: typeof ZionError_v1;
    ZionRegExp: typeof ZionRegExp_v1;
    lib: {
      calculateBits: IcalculateBits;
      formatTime: IformatTime;
    };
  };
}

interface lib {
  dataGuard: dataGuard_v1;
  guard: guard_v1;
  stringifyBase64: stringifyBase64_v1;
  zionUtil: IZionUtils_v1;
  swtch: swtch_v1;
}

/////////// zionbase
/////////////////// Class
import type { Base } from "./zionbase/Class";
import type { BaseCtor } from "./zionbase/Class";
import type { Base_v2 } from "./zionbase/Class";
import type { ProcessingNoiz } from "./zionbase/Class";
import type { ProcessingNoizCtor } from "./zionbase/Class";
/////////////////// DataStructures
/////////////////// ////// Graph
import type { Graph_v1Ctor } from "./zionbase/DataStructures/Graph/Graph_v1";
import type { Graph_v2Ctor } from "./zionbase/DataStructures/Graph/Graph_v2";
import type { Graph_v3 } from "./zionbase/DataStructures/Graph/Graph_v3";
import type { Graph_v4 } from "./zionbase/DataStructures/Graph/Graph_v4";
import type { ArrayGraph_v3Ctor } from "./zionbase/DataStructures/Graph/Graph_v3";
import { ListGraph_v1Ctor } from "./zionbase/DataStructures/Graph/extensions/ListGraph/ListGraph_v1";
import { MatrixGraph_v1Ctor } from "./zionbase/DataStructures/Graph/extensions/MatrixGraph/MatrixGraph_v1";
/////////////////// ////// ////// Edge
import type { Edge_v1Ctor } from "./zionbase/DataStructures/Graph/Edge/Edge_v1";
/////////////////// ////// ////// File
/////////////////// ////// ////// Node
import type { Node_v1Ctor } from "./zionbase/DataStructures/Graph/Node/Node_v1";
import type { Node_v2Ctor } from "./zionbase/DataStructures/Graph/Node/Node_v2";
/////////////////// ////// ////// Trees
import type { Tree_v1Ctor } from "./zionbase/DataStructures/Graph/extensions/Tree/Tree_v1";
import type { File_v1 } from "./zionbase/DataStructures/Graph/extensions/Tree/File/File_v1";
import type { Folder_v1Ctor } from "./zionbase/DataStructures/Graph/extensions/Tree/Folder/Folder_v1";
import type { Folder_v2Ctor } from "./zionbase/DataStructures/Graph/extensions/Tree/Folder/Folder_v2";
import type { Root_v1Ctor } from "./zionbase/DataStructures/Graph/extensions/Tree/Root/Root_v1";
import type { Root_v2Ctor } from "./zionbase/DataStructures/Graph/extensions/Tree/Root/Root_v2";
import type { TreeNode_v1Ctor } from "./zionbase/DataStructures/Graph/extensions/Tree/TreeNode/TreeNode_v1";
import type { TreeNode_v2 } from "./zionbase/DataStructures/Graph/extensions/Tree/TreeNode/TreeNode_v2";
import type { FileSystemTree_v1Ctor } from "./zionbase/DataStructures/Graph/extensions/Tree/FileSystemTree/FileSystemTree_v1";
/////////////////// ////// ///// ///// LeafNode
import type { LeafNode_v2Ctor } from "./zionbase/DataStructures/Graph/extensions/Tree/LeafNode/LeafNode_v2";
/////////////////// ////// ///// AppGraph
import type { AppGraph_v1Ctor } from "./zionbase/DataStructures/Graph/extensions/AppGraph/AppGraph_v1";
import type { AppNode_v1Ctor } from "./zionbase/DataStructures/Graph/extensions/AppGraph/AppNode/AppNode_v1";
/////////////////// ////// Array
import type { Array_v1Ctor } from "./zionbase/DataStructures/Array/Array_v1";
/////////////////// Lib
import type { add_v1 } from "./zionbase/DataStructures/Array/lib/add/add_v1";
import type { add_v1Path } from "./zionbase/DataStructures/Array/lib/add/add_v1";
import type { find_v1 } from "./zionbase/DataStructures/Array/lib/find/find_v1";
import { IcalculateBits } from "./utils/js/lib/calculateBits";
import { IformatTime } from "./utils/js/lib/formatTime";

export const zionbase: zionbaseType = _zionbase;

interface zionbaseType {
  Class: {
    Base: typeof Base;
    BaseCtor: typeof BaseCtor;
    Base_v2: typeof Base_v2;
    ProcessingNoiz: typeof ProcessingNoiz;
    ProcessingNoizCtor: typeof ProcessingNoizCtor;
  };
  DataStructure: DataStructure & extentions;
  Array: DataStructure["Array"];
  ArrayCtor: DataStructure["ArrayCtor"];
  Graph: DataStructure["Graph"];
  Graph_v3: DataStructure["Graph_v3"];
  GraphCtor: DataStructure["GraphCtor"];
  ListGraph: DataStructure["extensions"]["ListGraph"];
  ListGraphCtor: DataStructure["extensions"]["ListGraphCtor"];
  MatrixGraph: DataStructure["extensions"]["MatrixGraph"];
  MatrixGraphCtor: DataStructure["extensions"]["MatrixGraphCtor"];
  Node: DataStructure["Node"];
  NodeCtor: DataStructure["NodeCtor"];
  Node_v2: DataStructure["Node_v2"];
  AppGraph: DataStructure["extensions"]["AppGraph"];
  AppGraphCtor: DataStructure["extensions"]["AppGraph"];
  AppNode: DataStructure["extensions"]["AppNode"];
  AppNodeCtor: DataStructure["extensions"]["AppNodeCtor"];
  File: DataStructure["extensions"]["File"];
  Folder: DataStructure["extensions"]["Folder"];
  Root: DataStructure["extensions"]["Root"];
  Tree: DataStructure["extensions"]["Tree"];
  TreeNode: DataStructure["extensions"]["TreeNode"];
  FileSystemTree: DataStructure["extensions"]["FileSystemTree"];
  addPath: DataStructure["addPath"];
  add: DataStructure["add"];
}

interface DataStructure {
  Array: Array_v1Ctor;
  ArrayCtor: Array_v1Ctor;
  ArrayGraph: ArrayGraph_v3Ctor;
  Edge: Edge_v1Ctor;
  Graph: Graph_v1Ctor;
  GraphCtor: Graph_v1Ctor;
  Graph_v2: Graph_v2Ctor;
  Graph_v3: typeof Graph_v3;
  Graph_v4: Graph_v4;
  Node: Node_v1Ctor;
  NodeCtor: Node_v1Ctor;
  Node_v2: Node_v2Ctor;
  add: typeof add_v1;
  addPath: typeof add_v1Path;
  aggiungi: typeof add_v1;
  aggiungiPercorso: typeof add_v1Path;
  extensions: extentions;
  find: typeof find_v1;
  Trees: Trees;
}

interface Trees {
  File: typeof File_v1;
  FileSystemTree: FileSystemTree_v1Ctor;
  Folder: Folder_v1Ctor;
  Folder_v2: Folder_v2Ctor;
  LeafNode_v2: LeafNode_v2Ctor;
  Root: Root_v1Ctor;
  Root_v2: Root_v2Ctor;
  Tree: Tree_v1Ctor;
  TreeNode: TreeNode_v1Ctor;
  TreeNode_v2: typeof TreeNode_v2;
}

interface extentions extends Trees {
  AppGraph: AppGraph_v1Ctor;
  AppGraphCtor: AppGraph_v1Ctor;
  AppNode: AppNode_v1Ctor;
  AppNodeCtor: AppNode_v1Ctor;
  FileSystemTreeCtor: FileSystemTree_v1Ctor;
  ListGraph: ListGraph_v1Ctor;
  ListGraphCtor: ListGraph_v1Ctor;
  MatrixGraph: MatrixGraph_v1Ctor;
  MatrixGraphCtor: MatrixGraph_v1Ctor;
}
