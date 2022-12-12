#!/bin/bash

noiz="$(cd -- "$(dirname "$0")" >/dev/null 2>&1 && pwd -P)"
newFileClass=$noiz/newFileClass.sh
newFileComponent=$noiz/newFileComponent.sh
newFileFunction=$noiz/newFileFunction.sh
newFileHook=$noiz/newFileHook.sh
newFileStyled=$noiz/newFileStyled.sh
config=.noiz

cond=$(checkIfFileExists.sh $config)
currentDate=$(date)
currentVersion=0

TYPES=$(type3.sh)
TYPESARRAY=($TYPES)

type1=unknown
type2=unknown
type3=unknown
version=unknown
creation_date=unknown
update_date=unknown

if [ "$cond" = true ]; then
  echo "$config file found"
else
  echo "$config file not found"
  exit
fi

type1=$(sed '1!d' $config)
type2=$(sed '2!d' $config)
type3=$(sed '3!d' $config)
version=$(sed '4!d' $config)
creation_date=$(sed '5!d' $config)
update_date=$(sed '6!d' $config)

newVersion=$((${version} + 1))

if [ "$newVersion" = 1 ]; then
  echo the file is at the first version, it is probably messed up
fi

sed -i '' -e "4s/.*/$newVersion/" $config
sed -i '' -e "6s/.*/$currentDate/" $config

if [ $type3 = ${TYPESARRAY[0]} ]; then
  $newFileClass $newVersion
fi

if [ $type3 = ${TYPESARRAY[1]} ]; then
  $newFileComponent $newVersion
fi

if [ $type3 = ${TYPESARRAY[2]} ]; then
  $newFileFunction $newVersion
fi

if [ $type3 = ${TYPESARRAY[3]} ]; then
  $newFileHook $newVersion
fi

if [ $type3 = ${TYPESARRAY[4]} ]; then
  $newFileStyled $newVersion
fi

echo "done!!🏁🚀"

# This example script, and much of the above explanation supplied by
# Stéphane Chazelas (thanks again)

# num=1
# num2=1
# sum=$((${num} + ${num2}))
# echo ${sum}
# echo clo | cat - .folderConfig >temp && mv temp text.txt
