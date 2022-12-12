#!/bin/bash

noiz="$(cd -- "$(dirname "$0")" >/dev/null 2>&1 && pwd -P)"
questions=$noiz/questions
answers=$noiz/answers
questionScript=$questions/type1.sh
answerScript=$answers/type1.sh

answer=$(sh $questionScript)
result=$(sh $answerScript $answer)
echo $result
