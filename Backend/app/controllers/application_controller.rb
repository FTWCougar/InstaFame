class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  # set :session_secret, "SESSION_SECRET"
  # enable :sessions
  # use Rack::Session::Cookie, :key => 'rack.session',
  #                          :path => '/',
  #                          :secret => 'your_secret'

  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }
  end

end
