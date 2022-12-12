#!/bin/bash

echo "Do you wish to install this program?"
select yn in "Yes" "No"; do
  case $yn in
  Yes)
    echo great &&
      break
    ;;
  No) echo "not good" &&
    exit ;;
  esac
done
