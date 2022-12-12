#!/bin/bash

# USER INPUT
version=${1}

# variables
filename=${PWD##*/}
versionExtension=_v${version}
builtFilename=${filename}${versionExtension}
propsFilename=${builtFilename}Props
fileextension=.tsx
completename=${builtFilename}${fileextension}
indexfile=index.ts
longpath7="export {"
longpath6="  ${builtFilename}"
longpath5="} from './${builtFilename}';"
longpath4=""
longpath3="export type {"
longpath2="  ${propsFilename}"
longpath1="} from './${builtFilename}';"
# script

# // ComponentFile
touch ${completename} &&
  echo "export type ${propsFilename} = '${propsFilename}'" >>${completename} &&
  echo "export const ${builtFilename} = '${builtFilename}'" >>${completename}

# // index file
echo ${longpath1} | cat - ${indexfile} >temp && mv temp ${indexfile} &&
  echo ${longpath2} | cat - ${indexfile} >temp && mv temp ${indexfile} &&
  echo ${longpath3} | cat - ${indexfile} >temp && mv temp ${indexfile} &&
  echo ${longpath4} | cat - ${indexfile} >temp && mv temp ${indexfile} &&
  echo ${longpath5} | cat - ${indexfile} >temp && mv temp ${indexfile} &&
  echo ${longpath6} | cat - ${indexfile} >temp && mv temp ${indexfile} &&
  echo ${longpath7} | cat - ${indexfile} >temp && mv temp ${indexfile} &&
  echo "" >>${indexfile} &&
  echo "done!!🏁🚀"
