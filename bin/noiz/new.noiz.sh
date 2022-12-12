# #!/bin/bash

config=.noiz
cond=$(checkIfFileExists.sh "$config")
currentDate=$(date)
type1=$1
type2=$2
type3=$3
version=$4
creation_date=$5
udpate_date=$6
update_date=$currentDate

if [ "$cond" = false ]; then
  touch $config &&
    echo $type1 >>$config &&
    echo $type2 >>$config &&
    echo $type3 >>$config &&
    echo $version >>$config &&
    echo $currentDate >>$config &&
    echo $update_date >>$config
else
  echo true
fi

echo "done!!🏁🚀"
