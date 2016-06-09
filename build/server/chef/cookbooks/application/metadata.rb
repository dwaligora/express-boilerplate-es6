name             "application"
maintainer       "Daniel Waligora"
maintainer_email "danielwaligora@gmail.com"
description      "Node Express.js boilerplate cookbook"
version          "0.0.1"

# recipe           "application::vhost", "Configure nginx vhosts"
recipe           "application::node", "Install and configure any custom node & npm stuff"

depends 'nodejs'
depends 'mysql', '~> 6.1.2'