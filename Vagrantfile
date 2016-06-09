# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"
VAGRANT_HOST="192.168.10.30"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # install debian
  config.vm.box = "bento/debian-8.2"

  # berkshelf dependencies
  config.berkshelf.enabled = true
  config.berkshelf.berksfile_path = 'build/server/chef/cookbooks/Berksfile'

  # configure network
  config.vm.hostname = 'express-boilerplate.dev'
  config.vm.network "private_network", ip: VAGRANT_HOST, network: "255.255.0.0."
  config.vm.network "private_network", ip: VAGRANT_HOST, network: "255.255.0.0", virtualbox__intnet: "express-boilerplate"
  config.vm.network :forwarded_port, guest: 4020, host: 4021, auto_correct: true

  config.vm.synced_folder ".", "/var/www/express-boilerplate", :nfs => true

  # VirtualBox specific config
  config.vm.provider :virtualbox do |vb, override|
    override.vm.synced_folder ".", "/var/www/express-boilerplate", :nfs => true
    vb.customize ["modifyvm", :id, "--rtcuseutc", "on"]
    vb.customize ["modifyvm", :id, "--memory", 1024]
    vb.customize ["modifyvm", :id, "--cpus", 1]
    vb.customize ["modifyvm", :id, "--cpuexecutioncap", "75"]
  end

  # manage /etc/hosts file
  config.hostmanager.enabled = true
  config.hostmanager.manage_host = true
  config.hostmanager.ignore_private_ip = false
  config.hostmanager.include_offline = true
  config.hostmanager.aliases = [
    "express-boilerplate.dev",
    "api.express-boilerplate.dev"
  ]

  # chef recipes
  config.vm.provision "chef_solo" do |chef|
    chef.version = "12.10.40"
    chef.cookbooks_path = ["./build/server/chef/cookbooks"]
    chef.roles_path = "./build/server/chef/roles"
    chef.add_role "express-boilerplate"
    chef.json = {
      "nodejs" => {
        "install_method" => "source",
        "version" => "6.2.1",
        "source" => {
            "checksum" => "fa26d4380150fbb69a48bddaec6143e176effe043cfe44e512c5ef9d22618b63"
        }
      }
    }
  end

  # setup local unit vhost
  config.vm.provision :hostmanager
end
