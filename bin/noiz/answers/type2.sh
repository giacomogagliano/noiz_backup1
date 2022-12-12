#!/bin/bash

answer=$1
TYPES=$(type2.sh)
TYPESARRAY=($TYPES)
result=""

# index
if [ $answer = ${TYPESARRAY[0]} ]; then
  result="${TYPESARRAY[0]}"
fi

# module
if [ $answer = ${TYPESARRAY[1]} ]; then
  result="${TYPESARRAY[1]}"
fi

echo $result
