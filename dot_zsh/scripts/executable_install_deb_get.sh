#!/bin/zsh
#

file="/home/tam/.zsh/scripts/apps_deb_get.txt"
while read line; do
    sudo deb-get install $line
done < $file
