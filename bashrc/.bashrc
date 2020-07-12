# ~/.bashrc: executed by bash(1) for non-login shells.
# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)
# for examples

# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

# don't put duplicate lines or lines starting with space in the history.
# See bash(1) for more options
HISTCONTROL=ignoreboth

# append to the history file, don't overwrite it
shopt -s histappend

# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
HISTSIZE=1000
HISTFILESIZE=2000

# check the window size after each command and, if necessary,
# update the values of LINES and COLUMNS.
shopt -s checkwinsize

# If set, the pattern "**" used in a pathname expansion context will
# match all files and zero or more directories and subdirectories.
#shopt -s globstar

# make less more friendly for non-text input files, see lesspipe(1)
#[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"

# set variable identifying the chroot you work in (used in the prompt below)
if [ -z "${debian_chroot:-}" ] && [ -r /etc/debian_chroot ]; then
    debian_chroot=$(cat /etc/debian_chroot)
fi

# set a fancy prompt (non-color, unless we know we "want" color)
case "$TERM" in
    xterm-color|*-256color) color_prompt=yes;;
esac

# uncomment for a colored prompt, if the terminal has the capability; turned
# off by default to not distract the user: the focus in a terminal window
# should be on the output of commands, not on the prompt
#force_color_prompt=yes

if [ -n "$force_color_prompt" ]; then
    if [ -x /usr/bin/tput ] && tput setaf 1 >&/dev/null; then
	# We have color support; assume it's compliant with Ecma-48
	# (ISO/IEC-6429). (Lack of such support is extremely rare, and such
	# a case would tend to support setf rather than setaf.)
	color_prompt=yes
    else
	color_prompt=
    fi
fi

if [ "$color_prompt" = yes ]; then
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
else
    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
fi
unset color_prompt force_color_prompt

# If this is an xterm set the title to user@host:dir
case "$TERM" in
xterm*|rxvt*)
    PS1="\[\e]0;${debian_chroot:+($debian_chroot)}\u@\h: \w\a\]$PS1"
    ;;
*)
    ;;
esac

# enable color support of ls and also add handy aliases
if [ -x /usr/bin/dircolors ]; then
    test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
    alias ls='ls --color=auto'
    #alias dir='dir --color=auto'
    #alias vdir='vdir --color=auto'

    #alias grep='grep --color=auto'
    #alias fgrep='fgrep --color=auto'
    #alias egrep='egrep --color=auto'
fi

# colored GCC warnings and errors
#export GCC_COLORS='error=01;31:warning=01;35:note=01;36:caret=01;32:locus=01:quote=01'

# some more ls aliases
#alias ll='ls -l'
#alias la='ls -A'
#alias l='ls -CF'
alias lsx='ls -s -x -h'
alias cdproj='cd /mnt/c/users/dev/desktop/fresh-html\ testing\ env/'
alias cdcore='cd /mnt/c/users/dev/desktop/fresh-html\ testing\ env/core/'
alias cdpub='cd /mnt/c/users/dev/desktop/fresh-html\ testing\ env/public/'
alias cdfetch='cd /mnt/c/users/dev/desktop/fresh-html\ testing\ env/public/js/fetch/'
alias cdhandlers='cd /mnt/c/users/dev/desktop/fresh-html\ testing\ env/core/handlers/'
alias cdjs='cd /mnt/c/users/dev/desktop/fresh-html\ testing\ env/public/js/'
alias cdviews='cd /mnt/c/users/dev/desktop/fresh-html\ testing\ env/public/views/partials/'
alias cdmw='cd /mnt/c/users/dev/desktop/fresh-html\ testing\ env/core/middleware/'
alias cdmaj='cd /mnt/c/users/dev/desktop/fresh-html\ testing\ env/major'
alias cdmin='cd /mnt/c/users/dev/desktop/fresh-html\ testing\ env/minor'
alias cdperm='cd /mnt/c/users/dev/desktop/fresh-html\ testing\ env/models/permissions/'
alias cdupviews='cd /mnt/c/users/dev/desktop/fresh-html\ testing\ env/public/_updated_views/'
alias cdupcss='cd /mnt/c/users/dev/desktop/fresh-html\ testing\ env/public/_updated_css/'
alias cdupjs='cd /mnt/c/users/dev/desktop/fresh-html\ testing\ env/public/_updated_js/'
alias jul5='cd /mnt/c/users/dev/desktop/fresh_update_jul5_7pm/'
#
#
#
#
#
alias nanoserver='nano /mnt/c/users/dev/desktop/fresh-html\ testing\ env/server.js'
alias cdunf='cd /mnt/c/users/dev/desktop/fresh-html\ testing\ env/unfinished/'
alias cdmodels='cd /mnt/c/users/dev/desktop/fresh-html\ testing\ env/models/'
alias appdb='cd /mnt/c/users/dev/desktop/fresh-html\ testing\ env/database'
alias nanokali='nano /mnt/c/users/dev/desktop/fresh-html\ testing\ env/kali.rc'
alias nanorouter='nano /mnt/c/users/dev/desktop/fresh-html\ testing\ env/core/router.js'
alias nanocashmoney='nano /mnt/c/users/dev/desktop/fresh-html\ testing\ env/cashmoney.js'
alias nanocashtml='nano /mnt/c/users/dev/desktop/fresh-html\ testing\ env/public/cashboard.html'
alias nanomw='nano /mnt/c/users/dev/desktop/fresh-html\ testing\ env/core/middleware.js'
alias nanohandlers='nano /mnt/c/users/dev/desktop/fresh-html\ testing\ env/core/handlers.js'

#git
alias cdhtml='cd /mnt/c/users/dev/desktop/clean_up_html' 
alias cdtesting='cd /mnt/c/users/dev/desktop/fresh-html\ testing\ env/'
alias cdfresh='cd /mnt/c/users/dev/desktop/fresh/'
alias gitupdatehtml='git remote add origin https://github.com/sean-in-dezine/clean_up_html_delta.git'
alias gitupdatefresh='git remote add origin https://github.com/sean-in-dezine/fresh_the_one_and_not_only'
alias gitupdatetestingenv='git remote add origin https://github.com/sean-in-dezine/fresh_html_testing_env'
alias gitpushu='git push -u origin master'

# !handlers
alias gohandle='cd /mnt/c/users/dev/desktop/friday_payday/handlers'
alias gosubhandle='cd /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_'
alias gohandlefld='code /mnt/c/users/dev/desktop/friday_payday/handlers'
alias gosubhandlefld='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_'

# !subs
# subs - log
alias fbolog='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/log'
alias fboaddlog='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/log/server/server_add_log.js'
alias fbogetlog='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/log/_olog_master_.js'
alias fbogetxfr='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/log'

# subs - loop
alias fboloop='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/loop'
alias fbogetloop='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/loop/_ulid_get.js'
alias fboaddloop='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/loop/_admin_subz_add_loop.js'

# subs - users
alias fbouser='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/users'

#subs - transfer
alias fbotranzakt='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/tranzakt'
alias fboassign='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/tranzakt'

# subs - auth
alias fboauth='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/auth'

# subs - objects
alias obdxfrvars='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/tranzakt/_uxfru_vars.js'


#models
alias gomodels='cd /mnt/c/users/dev/desktop/friday_payday/models'
alias gomodfld='code /mnt/c/users/dev/desktop/friday_payday/models'
alias gosubmodfld='code /mnt/c/users/dev/desktop/friday_payday/models/recycled_models'
alias gosubmod='cd /mnt/c/users/dev/desktop/friday_payday/models/recycled_models'
alias gomodloop='code /mnt/c/users/dev/desktop/friday_payday/models/Loop.js'
alias gomodnotif='code /mnt/c/users/dev/desktop/friday_payday/models/Notification.js'
alias gomodperm='code /mnt/c/users/dev/desktop/friday_payday/models/Permissions.js'
alias gomodusr='code /mnt/c/users/dev/desktop/friday_payday/models/User.js'
alias gomodtzkt='code /mnt/c/users/dev/desktop/friday_payday/models/Tranzakt.js'
alias gomodlog='code /mnt/c/users/dev/desktop/friday_payday/models/Log.js'

# !/subs

# * turn the lots into a workspace, one for each........
# ? turn the lots into a workspace, one for each........
# ! turn the lots into a workspace, one for each........
# * turn the lots into a workspace, one for each........
# ? turn the lots into a workspace, one for each........
# ! turn the lots into a workspace, one for each........
#                    !lots
# * turn the lots into a workspace, one for each........
# ? turn the lots into a workspace, one for each........
# ! turn the lots into a workspace, one for each........
# * turn the lots into a workspace, one for each........
# ? turn the lots into a workspace, one for each........
# ! turn the lots into a workspace, one for each........


# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '
# alias lot='code '

# !/lots






# Alias definitions.
# You may want to put all your additions into a separate file like
# ~/.bash_aliases, instead of adding them here directly.
# See /usr/share/doc/bash-doc/examples in the bash-doc package.

if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi

# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi
