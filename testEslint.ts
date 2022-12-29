import * as parser from "@babel/parser";
import traverse from "@babel/traverse";
import { readFileSync } from "fs";

const code = readFileSync("./Component.tsx", "utf8");

const propNames: string[] = [];

// Use the ESLint API to get the AST of the code

// Use the @babel/parser package to parse the code and get the AST
const ast = parser.parse(code, {
  sourceType: "module",
  plugins: ["jsx", "typescript"],
});

// Use the @babel/traverse package to find the prop types of the component
traverse(ast, {
  TSTypeAnnotation(path) {
    if (path.parentPath.node.type === "TSPropertySignature") {
      if (path.parentPath.node.key.type === "Identifier") {
        propNames.push(path.parentPath.node.key.name);
      } else if (path.parentPath.node.key.type === "ArrayExpression") {
        // Handle array of expressions
      } else {
        // Handle other types of expressions
      }
    }
  },
});

console.log(ast.program.body[1]);
