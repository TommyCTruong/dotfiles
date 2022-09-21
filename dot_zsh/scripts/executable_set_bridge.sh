#!/usr/bin/zsh

sudo pacman -S qemu virt-manager virt-viewer dnsmasq vde2 bridge-utils openbsd-netcat

sudo cp ~/.zsh/bk/network/* /etc/systemd/network/

# disable network manager
sudo systemctl disable NetworkManager

# enable systemd network
sudo systemctl enable --now systemd-networkd
