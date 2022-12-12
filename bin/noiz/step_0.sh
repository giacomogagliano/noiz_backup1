#!/bin/bash

noiz="$(cd -- "$(dirname "$0")" >/dev/null 2>&1 && pwd -P)"
questions=$noiz/questions
answers=$noiz/answers
questionScript=$questions/type0.sh
answerScript=$answers/type0.sh

answer=$(sh $questionScript)
result=$(sh $answerScript $answer)
echo $result
