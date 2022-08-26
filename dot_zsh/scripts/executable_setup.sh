#!/bin/zsh
#
sudo pacman -Syu --noconfirm
sudo pacman -S chezmoi
chezmoi init --apply git@github.com:tommyctruong/dotfiles.git
exec zsh
mkdir ~/git/
cd ~/git/
git clone git@github:tommyctruong/wiki.git
chsh -s /bin/zsh
./install_pacman.sh
