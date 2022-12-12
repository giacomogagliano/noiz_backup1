#!/bin/bash

appName=$1
pkgJson="package.json"
tsJson="tsconfig.json"
prettier=".prettierrc"
src="src"
outDir="build"

# application types
next=next
next="${next} createNextApp"
NEXT=($next)
ts=typescript
ts="${ts} createTsApp"
TS=($ts)
js=javascript
js="${js} createJsApp"
JS=($js)

APPLICATIONTYPES=""
APPLICATIONTYPES="${APPLICATIONTYPES} ${NEXT[0]}"
APPLICATIONTYPES="${APPLICATIONTYPES} ${TS[0]}"
APPLICATIONTYPES="${APPLICATIONTYPES} ${JS[0]}"

cond=$(checkIfFolderExists.sh ${appName})

function getLineMatchingString() {
  file=$1
  pattern=$2
  a=$(cat -n $file | grep $pattern | awk '{print $1}')
  echo $a
}

function validate() {
  select yn in "Yes" "No"; do
    case $yn in
    Yes)
      echo yes &&
        break
      ;;
    No) echo no &&
      break ;;
    esac
  done
}

function checkFolderExistance() {
  if (${cond} === "true"); then
    echo "do you want to delete the folder?"
    validation=$(validate)
    # validation=validate

    if [ "$validation" == "yes" ]; then
      rm -r $appName
    fi

    if [ "$validation" == "no" ]; then
      echo "Exiting the program"
      exit
    fi
  fi
}

function step1() {
  TYPESARRAY=("$@")
  answer=""
  select yn in "$@"; do
    case $yn in
    ${TYPESARRAY[0]})
      echo "I will create a ${TYPESARRAY[0]} app" &&
        break
      ;;
    ${TYPESARRAY[1]})
      echo "I will create a ${TYPESARRAY[1]} app" &&
        createTsApp &&
        break
      ;;
    ${TYPESARRAY[2]})
      echo "I will create a ${TYPESARRAY[2]} app" &&
        break
      ;;
    esac
  done
}

function createTsApp() {
  # create Folder
  mkdir ${appName} && echo "created ${appName} folder.."

  # cd in the folder
  cd ${appName}

  # create package.json
  npm=$(npm init -y)

  # edit the pkg file
  pkgjsontemplate="{
    \"name\": \"@noizapps/${appName}\",
    \"version\": \"1.0.0\",
    \"description\": \"\",
    \"main\": \"src/index.js\",
    \"scripts\": {
      \"clean\": \"rm -r ${outDir}\",
      \"test\": \"echo \\\"Error: no test specified\\\" && exit 1\",
      \"build\": \"npm run clean && tsc && node build/index.js\"
    },
    \"keywords\": [],
    \"author\": \"\",
    \"license\": \"ISC\",
    \"dependencies\": {
      \"@zionstate/database\": \"0.0.1\",
      \"@zionstate/zionbase\": \"0.0.1\",
      \"@zionstate/utils\": \"0.0.1\"
    },
    \"devDependencies\": {
      \"@types/node\": \"^18.7.18\",
      \"typescript\": \"^4.8.3\"
    }
  }"
  echo $pkgjsontemplate >$pkgJson
  echo "created and edited the ${pkgJson} file.."

  # create tsconfig.json
  touch ${tsJson}

  # create ts outDir
  touch $outDir

  # write in tsconfig.json
  echo "{
    \"compilerOptions\": {
      \"moduleResolution\": \"node16\",
      \"target\": \"ES2020\",
      \"lib\": [\"DOM\", \"DOM.Iterable\", \"ES2020\"],
      \"resolveJsonModule\": false,
      \"jsx\": \"react\",
      \"strict\": true,
      \"forceConsistentCasingInFileNames\": true,
      \"skipLibCheck\": true,
      \"esModuleInterop\": true,
      \"moduleDetection\": \"force\",
      \"allowSyntheticDefaultImports\": true,
      \"declaration\": true,
      \"pretty\": true,
      \"newLine\": \"lf\",
      \"stripInternal\": true,
      \"noImplicitReturns\": true,
      \"noImplicitOverride\": true,
      \"noUnusedLocals\": true,
      \"noUnusedParameters\": true,
      \"noFallthroughCasesInSwitch\": true,
      \"noUncheckedIndexedAccess\": true,
      \"noPropertyAccessFromIndexSignature\": true,
      \"noEmitOnError\": true,
      \"useDefineForClassFields\": true,
      \"module\": \"commonjs\",
      \"outDir\": \"build\"
    },
    \"include\": [\"src/index.tsx\"],
    \"extends\": \"../../tsconfig.app.json\"
  }
  " >>${tsJson} &&
    echo "created ${tsJson} file.."

  # write prettier config file
  touch ${prettier} && echo "{
    \"printWidth\": 59,
    \"arrowParens\": \"avoid\",
    \"singleAttributePerLine\": false
  }" >>${prettier} && echo "created a ${prettier} file.."

  # create a src folder
  mkdir $src && echo "created a $src folder"

  # go in the src folder
  cd $src

  # call the noiz application here
  noiz.sh
  noiz.sh

  echo "created a ts application"
}

checkFolderExistance
step1 $APPLICATIONTYPES
cd .. && cd .. && cd ..
yarn manypkg fix
bolt
echo "we did it!! 🧠💅🚀"
