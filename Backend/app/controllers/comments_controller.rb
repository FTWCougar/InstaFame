class CommentController < ApplicationController
    
    get '/comments' do
        # binding.pry
       Comment.all.to_json
    end

end