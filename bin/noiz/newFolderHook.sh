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

indexpath=${folder}/index.ts
filepath=${folder}/${folder}_v1.ts
noizconfigpath=${folder}/.noiz
indexfile=index.ts

# root dir index
echo "" >>${indexfile} &&
  echo "//// ${folder}" >>${indexfile} &&
  echo "export * from './${folder}';" >>${indexfile}

mkdir ${folder} &&
  touch ${indexpath} &&
  echo "///// EXPORT" >>${indexpath} &&
  echo "export { ${folder}_v1 as ${folder} } from './${folder}_v1';" >>${indexpath} &&
  echo "//////" >>${indexpath}

# noiz config
touch ${noizconfigpath} &&
  echo $_type1 >>${noizconfigpath} &&
  echo $_type2 >>${noizconfigpath} &&
  echo $_type3 >>${noizconfigpath} &&
  echo $_version >>${noizconfigpath} &&
  echo $_creation_date >>${noizconfigpath} &&
  echo $_update_date >>${noizconfigpath}

touch ${filepath} &&
  echo "export const ${folder}_v1 = '${folder}_v1';" >>${filepath}

echo "created a new Hook Folder!!🏁🚀"
