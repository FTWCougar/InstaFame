class UserController < ApplicationController
    get '/users' do
        User.all.to_json
    end

    post '/users' do
        # binding.pry
        new_user = User.create(params)
        new_user.to_json
    end

end