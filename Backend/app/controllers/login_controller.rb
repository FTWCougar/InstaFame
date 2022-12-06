class LoginController < ApplicationController
    
      post "/login" do
        user = User.find_by_username(params[:username])
        if user
        if user.password == params[:password]
            puts "Password Correct"
          session[:user_id] = user.id
          user.to_json
        else
            { message: "Password Incorrect" }.to_json
        end
        else
           { message: "#{params[:username]} does not exist, please try again, or feel free to create a new account." }.to_json
        end 
    end

end