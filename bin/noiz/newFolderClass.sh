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
filename=${folder}_v1
filepath=${folder}/${filename}.ts
noizconfigpath=${folder}/.noiz

# root dir index
echo "" >>index.ts &&
  echo "//// ${folder}" >>index.ts &&
  echo "export * from './${folder}';" >>index.ts

mkdir ${folder} &&
  touch ${indexpath} &&
  echo "///// EXPORT" >>${indexpath} &&
  echo "export { ${filename} as ${folder} } from \"./${filename}\";" >>${indexpath} &&
  echo "export type { ${filename}Ctor as ${folder}Ctor } from \"./${filename}\";" >>${indexpath} &&
  echo "////////////" >>${indexpath}

# noiz config
touch ${noizconfigpath} &&
  echo $_type1 >>${noizconfigpath} &&
  echo $_type2 >>${noizconfigpath} &&
  echo $_type3 >>${noizconfigpath} &&
  echo $_version >>${noizconfigpath} &&
  echo $_creation_date >>${noizconfigpath} &&
  echo $_update_date >>${noizconfigpath}

touch ${filepath} &&
  echo "export interface I${filename} {" >>${filepath} &&
  echo "  name: string;" >>${filepath} &&
  echo "}" >>${filepath} &&
  echo "" >>${filepath} &&
  echo "export interface ${filename} {" >>${filepath} &&
  echo "  name: string;" >>${filepath} &&
  echo "}" >>${filepath} &&
  echo "" >>${filepath} &&
  echo "export class ${filename} implements I${filename} {" >>${filepath} &&
  echo "  constructor(name: string) {" >>${filepath} &&
  echo "    this.name = name;" >>${filepath} &&
  echo "  }" >>${filepath} &&
  echo "}" >>${filepath} &&
  echo "" >>${filepath} &&
  echo "export type ${folder}_v1Ctor = {" >>${filepath} &&
  echo "  new (name: string): ${filename};" >>${filepath} &&
  echo "};" >>${filepath} &&
  echo "" >>${filepath} &&
  echo "export const ${folder}_v1Ctor: ${folder}_v1Ctor = ${filename};" >>${filepath}

echo "created a new Class Folder!!🏁🚀"
