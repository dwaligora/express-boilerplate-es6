#
# Predictabl URANUS
#

# =============
# Configuration

PROJECT_NAME = predictabl-uranus

# ======
# VAGRANT

run:
	vagrant up

stop:
	vagrant halt

shell:
	vagrant ssh

# ===========
# NPM

# Install dependencies
install:
	npm install
	npm install mocha -g
	npm install gulp -g

update:
	npm update

clear:
	rm -rf node_modules/*

# Run tests, linters and any other quality assurance tool.
qa:
	npm test

# ==========
# Application
start:
	npm start

dist:
	npm run build