#!/bin/bash

function capitalize() {
  string=$1
  string=$(echo ${string:0:1} | tr '[a-z]' '[A-Z]')${string:1}
  echo ${string}
}

string_to_be_tested=$0
string_to_be_matched=$1
string_to_be_substituted=$(capitalize $2)

echo "${string_to_be_matched//${string_to_be_matched}/${capitalized}}"
