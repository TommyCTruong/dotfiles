#!/bin/zsh

### never test this before
mkdir ~/git
cd ~/git
git clone https://aur.archlinux.org/yay-git.git
cd yay-git
makepkg -si

