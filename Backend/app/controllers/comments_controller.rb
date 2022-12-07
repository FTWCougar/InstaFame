class CommentController < ApplicationController
    
    post '/comments' do
        binding.pry
        # Comment.find_by "post_id = ?", params[:]
    end

end