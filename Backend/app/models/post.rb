class Post < ActiveRecord::Base
    belongs_to :user
    has_many :comments

    def self.get_comments
        Post.all.map do |post|
            post.comments
        end
    end
end