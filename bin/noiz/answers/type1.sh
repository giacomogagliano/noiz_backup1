#!/bin/bash

noiz="$(cd -- "$(dirname "$0")" >/dev/null 2>&1 && cd .. && pwd -P)"
questions=$noiz/questions
answers=$noiz/answers
questionScript=$questions/type2.sh
answerScript=$answers/type2.sh

answer=$1
TYPES=$(type1.sh)
TYPESARRAY=($TYPES)
result=""

# folder
if [ $answer = ${TYPESARRAY[0]} ]; then
  answer1=$(sh $questionScript)
  result="$answer1"
fi

# file
if [ $answer = ${TYPESARRAY[1]} ]; then
  result="${TYPESARRAY[1]}"
fi

echo $result
