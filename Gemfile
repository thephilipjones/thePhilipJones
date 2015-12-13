source "http://rubygems.org"

gem 'jekyll'
gem 'redcarpet'
gem 'classifier-reborn'
gem 'fast-stemmer'

# Plugins
gem 'jekyll-gist'

# GitHub Pages
require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']
