### ARNO ZSH RC ###
export PATH=~/tools/nvim-macos/bin:$PATH
export PATH=/opt/homebrew/opt/llvm/bin:$PATH

export PATH="$HOME/.fastlane/bin:$PATH"

export CPPFLAGS="-I/opt/homebrew/opt/openjdk/include"
export CPPFLAGS="-I/opt/homebrew/opt/llvm/include"
export LDFLAGS="-L/opt/homebrew/opt/llvm/lib"

export ZSH="$HOME/Repos/dotfiles/.oh-my-zsh"
export XDG_CONFIG_HOME=$HOME/.config

export ANDROID_HOME=~/Library/Android/sdk/
export PATH=$PATH:~/android-sdks/platform-tools/
export PATH=$PATH:~/android-sdks/tools/

source $ZSH/themes/headline.zsh-theme


ZSH_THEME="headline"


alias vim=nvim

findandkill() {
  $(lsof -ti:3000 | xargs kill)
}

alias kill_port=findandkill

change_kitty_profile() {
  sh ~/Repos/dotfiles/.config/kitty/change-profile.sh
}

toggle_kitty_transparency() {
  sh ~/Repos/dotfiles/.config/kitty/toggle-transparency.sh
}

# pnpm
export PNPM_HOME="$HOME/Library/pnpm"
export PATH="$PNPM_HOME:$PATH"
# pnpm end

# bun completions
[ -s "$HOME/.bun/_bun" ] && source "$HOME/.bun/_bun"

# bun
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"
export PATH="$HOME/.local/share/sentry-devenv/bin:$PATH"

# Set a blazingly fast keyboard repeat rate
defaults write NSGlobalDomain KeyRepeat -int 1
defaults write NSGlobalDomain InitialKeyRepeat -int 15
defaults write NSGlobalDomain ApplePressAndHoldEnabled -bool false

autoload -U +X bashcompinit && bashcompinit
 
 export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
export PATH="/opt/homebrew/opt/openjdk@21/bin:$PATH"


source $HOMEBREW_PREFIX/share/zsh-autosuggestions/zsh-autosuggestions.zsh