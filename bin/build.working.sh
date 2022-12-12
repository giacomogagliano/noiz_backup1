#!/bin/bash

# TODO #47 @ariannatnl togliere blockchain e utils
utils="@zionstate/utils"
zionbase="@zionstate/zionbase"
blockchain="@zionstate/blockchain"
database="@zionstate/database"
ui="@zionstate/ui"
yarnUtils="bolt w ${utils} "
yarnZionBase="bolt w ${zionbase} "
yarnBlockchain="bolt w ${blockchain} "
yarnDatabase="bolt w ${database} "
yarnUi="bolt w ${ui} "

${yarnUtils} preconstruct build &&
  ${yarnUtils} build &&
  ${yarnBlockchain} preconstruct build &&
  ${yarnBlockchain} build &&
  ${yarnZionBase} preconstruct build &&
  ${yarnZionBase} build &&
  ${yarnDatabase} preconstruct build &&
  ${yarnDatabase} build &&
  ${yarnUi} preconstruct build &&
  ${yarnUi} build &&
  echo "well done"
