# setup mysql
mysql_service 'default' do
  port '3306'
  version '5.5'
  initial_root_password 'boilerplate'
  action [:create, :start]
end