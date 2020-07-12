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

# !subs
# subs - log




# subs - loop





# subs - auth

# subs - objects



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



# ?new subs from current list
# * turn the lots into a workspace, one for each........
# ? turn the lots into a workspace, one for each........
# ! turn the lots into a workspace, one for each........
# * turn the lots into a workspace, one for each........
# ? turn the lots into a workspace, one for each........
# ! turn the lots into a workspace, one for each........

# !these r complete below
alias fbogetxfr='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/log'
alias fboassign='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/tranzakt'
alias fbogetlog='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/log/_olog_master_.js'
alias fboaddlog='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/log/server/server_add_log.js'
alias fboaddloop='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/loop/_admin_subz_add_loop.js'
alias fbogetloop='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/loop/_ulid_get.js'

alias obdxfrvars='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/tranzakt/_uxfru_vars.js'
# !these r complete above


# !these r for reference below
# handlers
alias gohandle='cd /mnt/c/users/dev/desktop/friday_payday/handlers'
alias gosubhandle='cd /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_'
alias gohandlefld='code /mnt/c/users/dev/desktop/friday_payday/handlers'
alias gosubhandlefld='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_'
#subs -
alias fbolog='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/log'
alias fboloop='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/loop'
alias fbouser='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/users'
alias fbotranzakt='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/tranzakt'
alias fboauth='code /mnt/c/users/dev/desktop/friday_payday/handlers/_handler_subz_/auth'
# !these r for reference above


# !these need to be tested below
alias fbogetuser='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/users/_u_get_user.js'
alias fboupdateuser='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/users/_u_subs_update_user_self.js'
alias fboupuseremail='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/users/_u_subs_update_email.js'
alias fbogetuseremail='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/users/_u_subs_update_email.js'
alias fboupuseraccess='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/users/_u_subs_update_permissions.js'
alias fbogetuseraccess='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/users/_u_subs_update_permissions.js'
alias fboupuserpassword='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/users/_u_subs_update_password.js'

alias fboadminrequired='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/users/_admin_subz_admin_required.js'
alias fbomassaddusers='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/users/_admin_subz_mass_add_users.js'
alias fbomassdelusers='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/users/_admin_subz_mass_del_users.js'
alias obduser='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/users/users_obj_modele.js'
alias fboadduser='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/users/_admin_subz_add_user.js'
alias fbodeluser='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/users/_admin_subz_del_user.js'
# 
alias fboxfrloop='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/tranzakt/_uxfru_xfr.js' 
alias fboxfreject='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/tranzakt/_uxfru_reject.js'
alias fboxfrequest='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/tranzakt/_uxfru_request.js'
alias fboxfrespond='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/tranzakt/_uxfru_respond.js'
alias fboxfrhi='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/tranzakt/_uxfru_heirarchy.js'
alias fboxfrlog='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/tranzakt/_uxfru_log.js'
alias fboxfrnegative='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/tranzakt/_uxfru_negative.js'
alias fboxfrpositive='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/tranzakt/_uxfru_positive.js'
alias fboxfrtags='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/tranzakt/_uxfru_tags.js'
alias fboxfrusers='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/tranzakt/_uxfru_users.js'
alias obdxfrconstants='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/tranzakt/tranzakt_constants.js'
alias obdxfr='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/tranzakt/_tranzakt_obj_modele.js'
# 
alias fboauthhelper='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/auth/_u_subz_auth_helper.js'
alias fboauthlogin='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/auth/_u_subz_login.js'
alias fboauthregister='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/auth/_u_subz_register.js'
# 
alias fbologprefilters='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/log/_olog_filters_pre.js'
alias fbologsavedfilters='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/log/_olog_filters_saved.js'
alias fbologetfilters='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/log/_olog_get_filters.js'
alias fbologetrecent='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/log/_olog_get_recent.js'
alias fbologetuser='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/log/_olog_get_user.js'
alias fbologetmaster='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/log/_olog_master_.js'
alias obdlog='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/log/_olog_strict_modele_.js'
alias obdloguser='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/log/_olog_get_user.js'
alias obdlogwatchlist='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/log/_olog_watchlist_.js'
alias obdlogxfrs='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/log/_olog_xfrs_.js'
alias obdlognotifications='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/log/notification_protocol.js'
alias mwdclientvalidation='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/log/server/client_validation.js'
alias mwdservervalidation='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/log/server_validation.js'
# 
alias fbodeloop='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/loop/_admin_subz_del_loop.js'
alias fbomassaddloops='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/loop/_admin_subz_mass_add_loop.js'
alias fbomassdeloops='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/loop/_admin_subz_mass_del_loop.js'
alias fbodisplays='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/loop/_ulid_displays.js'
alias fbodisplayscard='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/loop/_ulid_displays_card.js'
alias fbodisplaysuser='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/loop/_ulid_displays_user.js'
alias fboloopfilters='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/loop/_ulid_filters.js'
alias fboloopmod='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/loop/_ulid_mod.js'
alias fboloopxfr='code /mnt/c/users/dev/desktop/friday_payday/_handler_subz_/loop/_ulid_xfr.js'


# * turn the lots into a workspace, one for each........
# ? turn the lots into a workspace, one for each........
# ! turn the lots into a workspace, one for each........
# * turn the lots into a workspace, one for each........
# ? turn the lots into a workspace, one for each........
# ! turn the lots into a workspace, one for each........

# !lots

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
