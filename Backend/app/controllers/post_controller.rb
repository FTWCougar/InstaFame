class PostController < ApplicationController
    
    get '/posts' do
        # binding.pry
       Post.order(created_at: :desc).to_json(include: [:comments, :user])
    end

    post '/posts' do
        new_post = Post.create(user_id: params[:user_id], likes: 0, dislikes: 0, image: params[:image], body: params[:body])
        new_post.to_json(include:[:comments, :user])
    end

    delete '/posts/:id' do
        binding.pry
        # Post.find(params[:id]).destroy
        Post.where
        # post.id.destroy
    end

end