# Predictabl URANUS

### Authors

- Daniel Waligora <daniel@neverbland.com>

## Technologies

1. [Vagrant](https://www.vagrantup.com)
2. [Chef](https://downloads.chef.io)
3. [Virtual Box](https://www.virtualbox.org/)
4. [Node.js v6.3.0](http://nodejs.org) (`v6.3.0`)
5. [MySQL](https://www.mysql.com/)
6. [nginx](https://nginx.org/)
7. JavaScript ES2015 with [Babel](https://babeljs.io/) polyfils

#### Vagrant

For the time being we are using Vagrant (gonna be replaced with [Docker](https://docs.docker.com/docker-for-mac/ as soon as possible)
for server provisioning and dev environment unification. The pre-configured Vagrant VM contains:

- Node.js v6.3.0
- NPM
- mocha
- gulp
- nginx


###### Vagrant VM is just a proposal. You can always install everything what is needed for the URANUS on your local machine and run it directly.

## URANUS API

#### PREREQUISITE

- install [Vagrant](https://www.vagrantup.com)
- install [chef-sdk](https://downloads.chef.io/chef-dk)
- install [Oracle VirtualBox](http://download.virtualbox.org/virtualbox/5.0.16/) (`<5.1.X`)

## Developer Notes

## Makefile

There are few important `make` targets:

    # development tasks, should be executed in your local env:

    $ make run          # runs the VM provisioning
    $ make stop         # stops the running VM
    $ make shell        # Opens VM shell

    # other tasks, should be executed in context of URANUS VM or locally (see $ make shell)
    $ make install      # installs all dependencies and prepares the API for development
    $ make update       # updates all dependencies and prepares the API for development
    $ make clear        # removes all dependencies
    $ make qa           # runs QA tasks
    $ make start        # start app server for development
    $ make dist         # prepares the distribution application package

## Running/Building/Releasing

To run QA targets that will run all tests and linting just do:

    $ make qa