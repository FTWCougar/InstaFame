class PostController < ApplicationController
    
    get '/posts' do
        # binding.pry
       Post.all.to_json
    end

end