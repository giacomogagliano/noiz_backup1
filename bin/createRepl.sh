TEMPLATE_FOLDER_PATH=/Users/WAW/Documents/Projects/noiz-network-state/apps/cli/templates/repl
FILE_NAME=repl.ts
TEMPLATE_FILE_PATH=$TEMPLATE_FOLDER_PATH/$FILE_NAME
PACKAGE_JSON=package.json
TEMPLATE_PKG_JSON_PATH=$TEMPLATE_FOLDER_PATH/$PACKAGE_JSON
TSCONFIG=tsconfig.json
TEMPLATE_TS_JSON_PATH=$TEMPLATE_FOLDER_PATH/$TSCONFIG
LOG_FILE_NAME=.log

source=$PWD
source_repl_path=$source/$FILE_NAME
source_package_json=$source/$PACKAGE_JSON
source_tsconfig_json=$source/$TSCONFIG

copyTemplate() {
  # $1 = template
  basename=$(basename $1)
  cp $1 $source &&
    if test -f $1; then
      echo " ├── ✓ $basename file created"
    fi
}

logExists() {
  # $1 = template
  basename=$(basename $1)
  echo " ├── ✓ $basename file exists"
}

if [ -d "$TEMPLATE_FOLDER_PATH" ]; then
  echo ── ✓ template folder exists
else
  exit
fi

if test -f "$TEMPLATE_FILE_PATH"; then
  echo ── ✓ template files exists
else
  exit
fi

if [ -d $source ]; then
  echo ─┬ ✓ setting up the environment

  # check template repl
  if test -f $source_repl_path; then
    logExists $source_repl_path
  else
    # copy template repl
    copyTemplate $TEMPLATE_FILE_PATH
  fi

  # check package.json
  if test -f $source_package_json; then
    logExists $source_package_json
  else
    # copy package.json
    copyTemplate $TEMPLATE_PKG_JSON_PATH
  fi

  # check tsconfig.json
  if test -f $source_tsconfig_json; then
    logExists $source_tsconfig_json
  else
    # copy tsconfig.json
    copyTemplate $TEMPLATE_TS_JSON_PATH
  fi
  # cop
fi
