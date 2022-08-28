#!/usr/bin/zsh

file="$1"

cp ~/.zsh/tpl/network.tpl ~/.zsh/scripts/${file}
chmod +x $file
#echo $file
