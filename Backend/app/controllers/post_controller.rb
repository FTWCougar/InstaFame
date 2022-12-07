class PostController < ApplicationController
    
    get '/posts' do
        # binding.pry
       Post.order(created_at: :desc).to_json(include: [:comments, :user])
    end

    post '/posts' do
        new_post = Post.create(user_id: params[:user_id], likes: 0, dislikes: 0, image: params[:image], body: params[:body])
        new_post.to_json(include:[:comments, :user])
    end

end