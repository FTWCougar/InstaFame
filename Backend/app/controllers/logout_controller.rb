class LogoutController < ApplicationController
    
    get '/logout' do
        # binding.pry
        session[:user_id] = nil
        {message: "Successfully logged out"}.to_json
    end

end