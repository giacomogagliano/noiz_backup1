#!/bin/bash

# Check if a file name was provided as an argument
if [ -z "$1" ]; then
  # If no file name was provided, use the current date and time as the file name
  file_name="chatGPT-$(date +%Y%m%d%H%M%S.%N).txt"
else
  # If a file name was provided, use it as the file name
  file_name="$1-$(date +%Y%m%d%H%M%S.%N).txt"
fi
touch $file_name
