#!/bin/sh

sudo pacman -Syyu

sudo pacman -S xorg

sudo pacman -S xfce4 xfce4-goodies

sudo pacman -S lightdm lightdm-slick-greeter lightdm-settings

sudo systemctl enable lightdm.service --force

sudo pacman -S base-devel git --needed

cd paru

makepkg -si


sudo pacman -S linux-lts linux-lts-headers

sudo pacman -S linux-zen linux-zen-headers


sudo pacman -S intel-ucode

sudo grub-mkconfig -o /boot/grub/grub.cfg

sudo mv /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak

sudo rankmirrors /etc/pacman.d/mirrorlist.bak > /etc/pacman.d/mirrorlist
