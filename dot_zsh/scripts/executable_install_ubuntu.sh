#!/bin/zsh
#

file="/home/tam/.zsh/scripts/apps_ubuntu.txt"
while read line; do
    sudo apt install -y $line
done < $file
