#!/bin/bash

for file in ${PWD}/*; do
    filename=$(basename "$file")
    chmod +x ${filename}
done
