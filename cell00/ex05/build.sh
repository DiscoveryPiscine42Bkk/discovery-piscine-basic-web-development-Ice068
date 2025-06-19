#!/bin/bash

for arg in "$@"
do
    folder="ex$arg"
    mkdir -p "$folder"
done
