#!/bin/bash

noiz="$(cd -- "$(dirname "$0")" >/dev/null 2>&1 && pwd -P)"
zionConfig="$noiz/new.noiz.sh"

# ARGUMENTS
folder=$1
_type1=$2
_type2=$3
_type3=$4
_version=$5
_creation_date=$6
_update_date=$7

folder=${1}
indexpath=${folder}/index.ts
filepath=${folder}/${folder}_v1.tsx
noizconfigpath=${folder}/.noiz

builtFilename=${folder}_v1
dataFilename=${builtFilename}Data
booleansFilename=${builtFilename}Booleans
propsFilename=${builtFilename}Props
classPropsFilename=${builtFilename}ClassProps
asChildFilename=${builtFilename}AsChild
indexfile=index.ts

indexpath=${folder}/index.ts

# root dir index
echo "" >>${indexfile} &&
  echo "//// ${folder}" >>${indexfile} &&
  echo "export * from './${folder}';" >>${indexfile}

mkdir ${folder} &&
  touch ${indexpath} &&

  # new folder index
  #:before
  echo "export {" >>${indexpath} &&
  echo "  ${builtFilename} as ${folder}," >>${indexpath} &&
  echo "} from './${builtFilename}';" >>${indexpath} &&
  echo "" >>${indexpath} &&
  echo "export type {" >>${indexpath} &&
  echo "  ${dataFilename} as ${folder}Data," >>${indexpath} &&
  echo "  ${booleansFilename} as ${folder}Booleans," >>${indexpath} &&
  echo "  ${propsFilename} as ${folder}Props," >>${indexpath} &&
  echo "  ${classPropsFilename} as ${folder}ClassProps," >>${indexpath} &&
  echo "  ${asChildFilename} as ${folder}AsChild," >>${indexpath} &&
  echo "} from './${builtFilename}';" >>${indexpath} &&
  echo "" >>${indexpath} &&

  # #:after
  # echo "" >>${indexpath} &&
  # echo "///// EXPORT" >>${indexpath} &&
  # echo "export type ${folder}Props = v1Props;" >>${indexpath} &&
  # echo "export const ${folder} = v1;" >>${indexpath} &&
  # echo "//////" >>${indexpath} &&
  # echo "" >>${indexpath} &&
  # echo "export type ${propsFilename} = v1Props;" >>${indexpath} &&
  # echo "export const ${builtFilename} = v1;" >>${indexpath}

  # noiz config
  touch ${noizconfigpath} &&
  echo $_type1 >>${noizconfigpath} &&
  echo $_type2 >>${noizconfigpath} &&
  echo $_type3 >>${noizconfigpath} &&
  echo $_version >>${noizconfigpath} &&
  echo $_creation_date >>${noizconfigpath} &&
  echo $_update_date >>${noizconfigpath}

# new folder file
touch ${filepath} &&
  echo "export type ${dataFilename} = '${dataFilename}';" >>${filepath} &&
  echo "export type ${booleansFilename} = '${booleansFilename}';" >>${filepath} &&
  echo "export type ${propsFilename} = '${propsFilename}';" >>${filepath} &&
  echo "export type ${classPropsFilename} = '${classPropsFilename}';" >>${filepath} &&
  echo "export type ${asChildFilename} = '${asChildFilename}';" >>${filepath} &&
  echo "export const ${builtFilename} = '${builtFilename}';" >>${filepath}

echo "created a new Component Folder!!🏁🚀"
