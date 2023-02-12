FILE_NAME=repl.ts
PACKAGE_JSON=package.json
TSCONFIG=tsconfig.json
LOG=.log

source=$PWD
source_repl_path=$source/$FILE_NAME
source_package_json=$source/$PACKAGE_JSON
source_tsconfig_json=$source/$TSCONFIG
source_log=$source/$LOG

deleteFile() {
  # $1 = file
  # echo $1
  basename=$(basename $1)
  rm $1 &&
    if test -f $1; then
      echo something wrong
    else
      echo --- ✓ $basename file deleted
    fi
}

logDoesnExists() {
  # $1 = template
  basename=$(basename $1)
  echo --- ✗ "$basename file doesn't exists"
}

if [ -d $source ]; then
  echo - ✓ deleting environment files..

  # check template repl
  if test -f $source_repl_path; then
    # delete template repl
    deleteFile $source_repl_path
  else
    logDoesnExists $source_repl_path
  fi

  # check package.json
  if test -f $source_package_json; then
    # delete package.json
    deleteFile $source_package_json
  else
    logDoesnExists $source_package_json
  fi

  # check tsconfig.json
  if test -f $source_tsconfig_json; then
    # delete tsconfig.json
    deleteFile $source_tsconfig_json
  else
    logDoesnExists $source_tsconfig_json
  fi

  # check if .log file exists
  if test -f $source_log; then
    # delete log file
    deleteFile $source_log
  else
    logDoesnExists $source_log
  fi
fi
