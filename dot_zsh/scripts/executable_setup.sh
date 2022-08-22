#!/bin/bash
#
sudo ln -s ~/.zsh/scripts/caps2ctrl.sh /bin/1

file="/home/tam/.zsh/scripts/apps_pacman.txt"
while read line; do
    sudo pacman -S --noconfirm --needed $line
done < $file

