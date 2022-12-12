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

# script

# // ComponentFile
touch ${completename} &&
  echo "export const ${builtFilename} = '${builtFilename}'" >>${completename} &&
  echo "export type ${propsFilename} = '${propsFilename}'" >>${completename} &&

  # // index file
  echo "import { ${builtFilename} as v${version}, ${propsFilename} as v${version}Props } from './${builtFilename}';" | cat - ${indexfile} >temp && mv temp ${indexfile} &&
  echo "" >>${indexfile} &&
  echo "export const ${builtFilename} = v${version};" >>${indexfile} &&
  echo "export type ${propsFilename} = v${version}Props;" >>${indexfile} &&
  echo "done!!🏁🚀"
