#!/bin/bash

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
