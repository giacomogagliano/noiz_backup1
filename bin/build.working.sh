#!/bin/bash

test="@zionstate/test"
zionbase="@zionstate/zionbase"
database="@zionstate/database"
ui="@zionstate/ui"
# //////////////
yarnTest="bolt w ${test} "
yarnZionBase="bolt w ${zionbase} "
yarnDatabase="bolt w ${database} "
# i am suspending the building of ui till we found a
# solution for the next app within it which uses the same
# `tsconfig` file.
yarnUi="bolt w ${ui} "

${yarnTest} preconstruct build &&
  ${yarnTest} build &&
  ${yarnZionBase} preconstruct build &&
  ${yarnZionBase} build &&
  ${yarnDatabase} preconstruct build &&
  ${yarnDatabase} build &&
  # ${yarnUi} preconstruct build &&
  # ${yarnUi} build &&
  echo "well done"
