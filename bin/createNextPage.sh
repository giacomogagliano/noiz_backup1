#!/bin/bash

page=${1}
file=${page}/index.tsx

mkdir ${page} &&
  touch ${file} &&
  echo "import React from \"react\";" >>${file} &&
  echo "" >>${file} &&
  echo "export default function index() {" >>${file} &&
  echo "  return (" >>${file} &&
  echo "    <div>index</div>" >>${file} &&
  echo "  )" >>${file} &&
  echo "}" >>${file} &&
  echo "done!!🏁🚀"
