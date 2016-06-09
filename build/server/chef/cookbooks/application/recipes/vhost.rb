# nginx conjure-slack config
template "conjure-slack" do
  path "#{node['nginx']['dir']}/sites-available/conjure-slack.conf"
  source "nginx/conjure-slack.conf.erb"
  owner "root"
  group "root"
  mode "0644"
  variables(
    :node => node
  )
  notifies :reload, resources(:service => "nginx")
end

link "#{node['nginx']['dir']}/sites-enabled/conjure-slack.conf" do
  to "#{node['nginx']['dir']}/sites-available/conjure-slack.conf"
  owner "root"
  group "root"
  mode "0644"
  not_if do
    File.exists?("#{node['nginx']['dir']}/sites-enabled/conjure-slack.conf")
  end
end

service "nginx" do
  action [:reload, :restart]
end