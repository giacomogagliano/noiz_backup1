#!/bin/bash
// TODO create a version of this which works with bolt and yarn
cd $!
git add . &&
git commit . -m $2 &&
npm version patch &&
git push origin main &&
npm publish --access public