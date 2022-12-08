class PostController < ApplicationController
    
    get '/posts' do
        # binding.pry
       Post.order(created_at: :desc).to_json(include: [:comments, :user])
    end

    post '/posts' do
        new_post = Post.create(user_id: params[:user_id], likes: 0, dislikes: 0, image: params[:image], body: params[:body])
        new_post.to_json(include:[:comments, :user])
    end

    patch '/posts/:id' do
        updatedPost = Post.find(params[:id])
        # if params[:likes] 
        #     updatedPost.update(likes: params[:likes])
        # elsif params[:dislikes] 
        #     updatedPost.update(dislikes: params[:dislikes])
        # else
        #     updatedPost.update(body: params[:body], image: params[:image])
        # end
        updatedPost.update(params)
        "Successfully updated"
        updatedPost.to_json(include:[:comments, :user])
    end

    delete '/posts/:id' do
        post = Post.find(params[:id])
        post.destroy
        "Successfully deleted"
     end

end