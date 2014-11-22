#!/usr/bin/env zsh

tsc -w src/*.ts --outDir dist/ &
sibilant src/*.sibilant -o dist/ &
stylus -w src/*.styl -o dist/ &
