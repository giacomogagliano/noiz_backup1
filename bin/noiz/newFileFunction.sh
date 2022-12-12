#!/bin/bash

# USER INPUT
version=${1}

# variables
filename=${PWD##*/}
versionExtension=_v${version}
builtFilename=${filename}${versionExtension}
propsFilename=${builtFilename}Props
fileextension=.ts
completename=${builtFilename}${fileextension}
indexfile=index.ts

templateIndex="
///// EXPORT
export { ${completename}v1 as joinPaths } from \"./${completename}v1\";
export type { ${completename}v1 as joinPathsType } from \"./${completename}v1\";
//////
"

templateFunction="
export interface I${completename} {
  (a: any): any;
}

export const ${completename}: I${completename} = function () {};
"

# script

# // functionname
touch ${completename} &&
  echo ${templateFunction} >>${completename}

# // index file
echo ${completename} &&
  echo "done!!🏁🚀"
