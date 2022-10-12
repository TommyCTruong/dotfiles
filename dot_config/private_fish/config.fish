### ADDING TO THE PATH
# First line removes the path; second line sets it.  Without the first line,
# your path gets massive and fish becomes very slow.
set -e fish_user_paths
set -U fish_user_paths $HOME/bin $HOME/.local/bin $HOME/.cargo/bin $fish_user_paths

### EXPORT ###
set fish_greeting                                 # Supresses fish's intro message
set TERM "xterm-256color"                         # Sets the terminal type
set -gx EDITOR nvim

#
source ~/.aliases
zoxide init fish | source
starship init fish | source
