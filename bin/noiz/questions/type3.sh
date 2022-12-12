#!/bin/bash

TYPES=$(type3.sh)
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
  ${TYPESARRAY[2]})
    answer=${TYPESARRAY[2]} &&
      break
    ;;
  ${TYPESARRAY[3]})
    answer=${TYPESARRAY[3]} &&
      break
    ;;
  ${TYPESARRAY[4]})
    answer=${TYPESARRAY[4]} &&
      break
    ;;
  esac
done

echo $answer
