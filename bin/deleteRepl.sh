FILE_NAME=repl.ts
PACKAGE_JSON=package.json
TSCONFIG=tsconfig.json

source=$PWD
source_repl_path=$source/$FILE_NAME
source_package_json=$source/$PACKAGE_JSON
source_tsconfig_json=$source/$TSCONFIG

deleteTemplate() {
  # $1 = template
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
  echo --- ✓ "$basename file doesn't exists"
}

if [ -d $source ]; then
  echo - ✓ deleting environment files..

  # check template repl
  if test -f $source_repl_path; then
    # copy template repl
    deleteTemplate $source_repl_path
  else
    logDoesnExists $source_repl_path
  fi

  # check package.json
  if test -f $source_package_json; then
    # copy package.json
    deleteTemplate $source_package_json
  else
    logDoesnExists $source_package_json
  fi

  # check tsconfig.json
  if test -f $source_tsconfig_json; then
    # copy tsconfig.json
    deleteTemplate $source_tsconfig_json
  else
    logDoesnExists $source_tsconfig_json
  fi
  # cop
fi
