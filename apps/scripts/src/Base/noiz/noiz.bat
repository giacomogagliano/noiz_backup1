#!/bin/bash

bin="$(cd -- "$(dirname "$0")" >/dev/null 2>&1 && pwd -P)"
noiz=$bin/noiz
step1="$noiz/step_1.sh"
step2="$noiz/step_2.sh"
step3="$noiz/step_3.sh"
noizConfig="$noiz/new.noiz.sh"
newFolder="$noiz/newFolder.sh"
newFile="$noiz/newFile.sh"
checkFolderName="$noiz/checkFolderName.sh"
validate="$noiz/questions/validate.sh"
folderType="$noiz/questions/folderType.sh"
config=.noiz

cond=$(checkIfFileExists.sh $config)

# .noiz
folderName=unknown
type1=unknown
type2=unknown
type3=unknown
version=unknown
creation_date=unkown
update_date=unkown
# question1="$noiz/question1.sh"

# TYPES1=$(type1.sh)
# TYPES1ARRAY=($TYPES1)
# echo $(sh $step1)

# //////////

echo "Welcome to the Noiz CLI?"

if [ "$cond" = true ]; then
  echo "config exists"
else
  echo "$config file not found"
  echo "Do you want to create a .zion file or exit the CLI?"
  validation=$(sh $validate)
  echo $validation
  if [ $validation = "yes" ]; then
    echo "Is this folder the root folder of the package?"
    validation=$(sh $validate)
    if [ $validation = "yes" ]; then
      # noiz config
      touch ${config} &&
        echo root >>${config} &&
        echo index >>${config} &&
        echo src >>${config} &&
        echo "see package" >>${config} &&
        echo $(date) >>${config} &&
        echo $(date) >>${config} &&
        echo ".zion config file was created, now you can run the command again" &&
        exit
    else
      ##////
      folderType=$(sh $folderType)
      if [ $folderType = "index" ]; then
        touch ${config} &&
          echo folder >>${config} &&
          echo index >>${config} &&
          echo none >>${config} &&
          echo 1 >>${config} &&
          echo $(date) >>${config} &&
          echo $(date) >>${config} &&
          echo ".zion config file was created, now you can run the command again" &&
          exit
      else
        touch ${config} &&
          echo folder >>${config} &&
          echo module >>${config} &&
          echo $(cd .. && sed '3!d' $config) >>${config} &&
          echo 1 >>${config} &&
          echo $(date) >>${config} &&
          echo $(date) >>${config} &&
          echo ".zion config file was created, now you can run the command again" &&
          exit
      fi
      # noiz config
    fi

  else
    exit
  fi
fi

echo "Do you want to create a file or a folder?"
answer1=$(sh $step1)
if [ $answer1 = "index" ]; then
  cond=$(checkIfFileExists.sh "$index")
  if [ $cond = true ]; then
    echo -n "What's the name of the new folder? "
    read
    index=index.ts
    # export * as themes from "./HTML/React/themes";
    folderName=${REPLY}
    check=$(sh $checkFolderName "${folderName}")
    echo "export * as ${folderName} from './${folderName}'" >>$index
    mkdir $folderName
    echo created a folder named "$folderName"
    cd $folderName
    touch $index &&
      echo "export {}" >>$index
    echo "created a file in $folderName called: $index"
    type1=folder
    type2=$answer1
    type3=none
    version=1
    creationDate=$(date)
    update_date=$(date)
    sh $noizConfig $type1 $type2 $type3 $version
    echo -n "Do you want to create an element for this new folder? "
    read
    echo ${REPLY}
  else
    echo file doesnt exists
  fi

  # insert export in index file
else
  if [ $answer1 = "module" ]; then
    echo "What type of content will the folder contain?"
    answer3=$(sh $step3)
    echo -n "What's the name of the new folder? "
    read
    folderName=${REPLY}
    type1=folder
    type2=$answer1
    type3=$answer3
    version=1
    creation_date=$(date)
    update_date=$(date)
    sh $newFolder $folderName $type1 $type2 $type3 $version "${creation_date}" "${update_date}"
  else
    echo "What type of content will the folder contain?"
    answer3=$(sh $step3)
    sh $newFile
  fi
fi
