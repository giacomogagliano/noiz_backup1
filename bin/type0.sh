#!/bin/bash

folder=folder
file=file

TYPES1=""
TYPES1="${TYPES1} $create"
TYPES1="${TYPES1} $delete"

for TYPE in ${TYPES1}; do
  echo ${TYPE}
done
