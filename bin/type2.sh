#!/bin/bash

answer=0
index=index
module=module

TYPES1=""
TYPES1="${TYPES1} $index"
TYPES1="${TYPES1} $module"

for TYPE in ${TYPES1}; do
  echo ${TYPE}
done
