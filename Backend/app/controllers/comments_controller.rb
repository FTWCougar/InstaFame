class CommentController < ApplicationController
    
    post '/comments' do
        new_comment = Comment.create(user_id: params[:user_id], post_id: params[:post_id], likes: 0, dislikes: 0, body: params[:body])
        new_comment.to_json
    end

end