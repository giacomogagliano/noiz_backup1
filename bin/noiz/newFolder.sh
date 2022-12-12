#!/bin/bash

cond=$(checkIfFileExists.sh .noiz)
noiz="$(cd -- "$(dirname "$0")" >/dev/null 2>&1 && pwd -P)"
newFolderClass=$noiz/newFolderClass.sh
newFolderComponent=$noiz/newFolderComponent.sh
newFolderFunction=$noiz/newFolderFunction.sh
newFolderHook=$noiz/newFolderHook.sh
newFolderStyled=$noiz/newFolderStyled.sh
config=.noiz

TYPES=$(type3.sh)
TYPESARRAY=($TYPES)

currentDate=$(date)
currentVersion=0

# ARGUMENTS
folder=$1
_type1=$2
_type2=$3
type=$4
_type3=$4
_version=$5
_creation_date=$6
_update_date=$7

store_type1=unknown
store_type2=unknown
store_type3=unknown
store_version=unknown
store_creation_date=unknown
store_update_date=unknown

if [ "$cond" = true ]; then
  echo "config exists"
else
  echo "$config file not found"
  exit
fi

store_type1=$(sed '1!d' $config)
store_type2=$(sed '2!d' $config)
store_type3=$(sed '3!d' $config)
store_version=$(sed '4!d' $config)
store_creation_date=$(sed '5!d' $config)
store_update_date=$(sed '6!d' $config)
echo $type
echo $folder

if [ $store_type2 = "index" ]; then
  echo this folder should contain only other folders
fi

if [ $store_type2 = "module" ]; then
  echo this folder should contain versioning files
fi

if [ $type = ${TYPESARRAY[0]} ]; then
  sh $newFolderClass $folder $_type1 $_type2 $_type3 $_version "${_creation_date}" "${_update_date}"
fi

if [ $type = ${TYPESARRAY[1]} ]; then
  sh $newFolderComponent $folder $_type1 $_type2 $_type3 $_version "${_creation_date}" "${_update_date}"
fi

if [ $type = ${TYPESARRAY[2]} ]; then
  sh $newFolderFunction $folder $_type1 $_type2 $_type3 $_version "${_creation_date}" "${_update_date}"
fi

if [ $type = ${TYPESARRAY[3]} ]; then
  sh $newFolderHook $folder $_type1 $_type2 $_type3 $_version "${_creation_date}" "${_update_date}"
fi

if [ $type = ${TYPESARRAY[4]} ]; then
  sh $newFolderStyled $folder
fi

echo "done!!🏁🚀"
