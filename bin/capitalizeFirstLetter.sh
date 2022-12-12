#!/bin/bash

foo=${PWD##*/}
foo=$(echo ${foo:0:1} | tr '[a-z]' '[A-Z]')${foo:1}
echo $foo
