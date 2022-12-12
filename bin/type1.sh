#!/bin/bash

folder=folder
file=file

TYPES1=""
TYPES1="${TYPES1} $folder"
TYPES1="${TYPES1} $file"

for TYPE in ${TYPES1}; do
  echo ${TYPE}
done
