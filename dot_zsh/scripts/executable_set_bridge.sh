#!/usr/bin/zsh

sudo cp ~/.zsh/bk/network/* /etc/systemd/network/

# disable network manager
sudo systemctl disable NetworkManager

# enable systemd network
sudo systemctl systemd-networkd
