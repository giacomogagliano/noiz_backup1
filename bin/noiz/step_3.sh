#!/bin/bash

noiz="$(cd -- "$(dirname "$0")" >/dev/null 2>&1 && pwd -P)"
questions=$noiz/questions
answers=$noiz/answers
questionScript=$questions/type3.sh
answerScript=$answers/type3.sh

answer=$(sh $questionScript)
result=$(sh $answerScript $answer)
echo $result
