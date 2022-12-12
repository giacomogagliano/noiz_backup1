#!/bin/bash

TYPES=$(type0.sh)
TYPESARRAY=($TYPES)

select yn in $TYPES; do
  case $yn in
  ${TYPESARRAY[0]})
    answer=${TYPESARRAY[0]} &&
      break
    ;;
  ${TYPESARRAY[1]})
    answer=${TYPESARRAY[1]} &&
      break
    ;;
  esac
done

echo $answer
