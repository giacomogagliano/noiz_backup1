#!/bin/bash

package=$1
workspace=$2
# bolt add ${package}

yarn manypkg fix &&
  bolt add $package &&
  bolt w $workspace add -D $package &&
  yarn manypkg fix &&
  echo "finished! 🕺"
