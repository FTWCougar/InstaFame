class LoginController < ApplicationController
    
      post "/login" do
        user = User.find_by_username(params[:username])
        if user
        if user.password == params[:password]
            puts "Password Correct"
          session[:user_id] = user.id
          user.to_json
        else
          false.to_json
        end
        else
          false.to_json
        end 
    end

end