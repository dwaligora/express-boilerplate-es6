# global npm packages
global_packages_list = %w(
  mocha bower gulp
)

global_packages_list.each do |name|
  nodejs_npm name do
    options ['-g']
  end
end
