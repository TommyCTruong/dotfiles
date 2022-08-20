#!/bin/bash
#
file="/home/tam/.zsh/scripts/apps_pacman.txt"
while read line; do
    sudo pacman -S --noconfirm --needed $line
done < $file

