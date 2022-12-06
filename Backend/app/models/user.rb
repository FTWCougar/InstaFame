class User < ActiveRecord::Base
    has_many :posts
    has_many :comments

    def self.login(username, password)
        user = self.find_by "username = ?", username
        if user
            if user[:password] == password.to_s
                "Welcome #{username}"
            else
                "Wrong password please try again"
            end
        else
            "#{username} doesn't exist please try again or feel free to create an account"
        end
    end

    def self.create_user(username, password, first_name, last_name)
        User.create(username: username, password: password, first_name: first_name, last_name: last_name)
    end
end