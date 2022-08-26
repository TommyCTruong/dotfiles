#!/bin/zsh
### Update system
sudo pacman -Syu --noconfirm

### Install slick greeter for lightd display manager ##
sudo pacman -S lightdm-slick-greeter lightdm-settings
### Install chezmoi
sudo pacman -S chezmoi

chezmoi init --apply git@github.com:tommyctruong/dotfiles.git
exec zsh
mkdir ~/git/
cd ~/git/
git clone git@github:tommyctruong/wiki.git
chsh -s /bin/zsh
./install_pacman.sh

# set up screensaver ##

mkdir -p ~/.config/systemd/user/

cp ./xscreensaver.service ~/.config/systemd/user/

systemctl --user enable xscreensaver
