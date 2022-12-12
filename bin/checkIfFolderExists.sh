#!/bin/bash

filename=${1}
cond=false

test -d ${filename} &&
  cond=true

if [ "$cond" = true ]; then
  echo ${cond}
else
  cond=false
  echo ${cond}
fi
