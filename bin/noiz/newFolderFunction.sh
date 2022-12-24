#!/bin/bash
noiz="$(cd -- "$(dirname "$0")" >/dev/null 2>&1 && pwd -P)"
zionConfig="$noiz/new.noiz.sh"
noiz_root="$(cd $noiz && cd .. && cd .. && echo $PWD)"

echo $noiz_root

# ARGUMENTS
folder=$1
_type1=$2
_type2=$3
_type3=$4
_version=$5
_creation_date=$6
_update_date=$7

indexpath=${folder}/index.ts
filename=${folder}_v1
filepath=${folder}/${filename}.ts
noizconfigpath=${folder}/.noiz
indexfile=index.ts

template_folder=$noiz_root/apps/cli/templates/function/
template_folder_index=${template_folder}index.ts
template_folder_index_string=$(cat ${template_folder_index})
template_file=${template_folder}_variable_/_variable__v1.ts
template_file_string=$(cat ${template_file})
template_file_index=${template_folder}_variable_/index.ts
template_file_index_string=$(cat ${template_file_index})

function capitalize() {
  string=$1
  string=$(echo ${string:0:1} | tr '[a-z]' '[A-Z]')${string:1}
  echo ${string}
}

echo "\\n${template_folder_index_string//_variable_/${folder}}" >>${indexfile}

mkdir ${folder} &&
  touch ${indexpath} &&
  echo "${template_file_index_string//_variable_/${folder}}" >>${indexpath}

# noiz config
touch ${noizconfigpath} &&
  echo $_type1 >>${noizconfigpath} &&
  echo $_type2 >>${noizconfigpath} &&
  echo $_type3 >>${noizconfigpath} &&
  echo $_version >>${noizconfigpath} &&
  echo $_creation_date >>${noizconfigpath} &&
  echo $_update_date >>${noizconfigpath}

touch ${filepath} &&
  echo "${template_file_string//_variable_/${filename}}" >>${filepath}

echo "created a new Function Folder!!🏁🚀"
