#!/bin/bash

answer=$1
TYPES=$(type3.sh)
TYPESARRAY=($TYPES)
result=""

if [ $answer = ${TYPESARRAY[0]} ]; then
  result="${TYPESARRAY[0]}"
fi

if [ $answer = ${TYPESARRAY[1]} ]; then
  result="${TYPESARRAY[1]}"
fi

if [ $answer = ${TYPESARRAY[2]} ]; then
  result="${TYPESARRAY[2]}"
fi

if [ $answer = ${TYPESARRAY[3]} ]; then
  result="${TYPESARRAY[3]}"
fi

if [ $answer = ${TYPESARRAY[4]} ]; then
  result="${TYPESARRAY[4]}"
fi

echo $result
