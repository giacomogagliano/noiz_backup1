SHEBANG="#!/usr/bin/env node"
EXCAPED_SHEBANG="\#\!/usr/bin/env node"

source=$PWD

file=$1
file_path=$source/$file
if test -f $file_path; then
  content=$(cat $file)
  condition=$(cat scrip.ts | grep "$EXCAPED_SHEBANG")
  echo $condition
  empty="s"
  if [ "$condition" = "" ]; then
    edited="$SHEBANG\n\n$content"
    echo $edited >$file_path
    echo shebang added to the file!
    chmod +x $file_path
    echo file written succesfully!!
  else
    echo shebang statement is already there!!
  fi

  if [ -x $file_path ]; then
    echo "file is already executable"
  else
    chmod +x $file_path
    echo "file has been set to executable"
  fi
else
  echo "file doesn't exist"
fi
