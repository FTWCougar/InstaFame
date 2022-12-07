User.destroy_all
Post.destroy_all
Comment.destroy_all

puts "🌱 Seeding Users..."
cameron = User.create(first_name: "Cameron", last_name: "Millen", username: "FTW_Cougar", password: "123")
liv = User.create(first_name: "Liv", last_name: "Nelson", username: "Shutter_Girl", password: "456")
marco = User.create(first_name: "Marco", last_name: "Amador", username: "Lost_Boy", password: "789")

puts "🌱 Seeding Posts..."
p1 = Post.create(user_id: cameron.id, body: "Ruby is a rock", likes: 5, dislikes: 2, image: nil)
p2 = Post.create(user_id: liv.id, body: "Active Record set a new record for me", likes: 89, dislikes: 14, image: nil)
p3 = Post.create(user_id: cameron.id, body: "JavaScript is the best", likes: 501, dislikes: 500, image: nil)
p4 = Post.create(user_id: marco.id, body: "Rails makes me want to be derailed", likes: 9, dislikes: 8, image: nil)
p5 = Post.create(user_id: cameron.id, body: "React reacted to this post", likes: 45, dislikes: 97, image: nil)
p6 = Post.create(user_id: marco.id, body: "Sinatra the final layer to ruby", likes: 4554, dislikes: 69, image: nil)
p7 = Post.create(user_id: marco.id, body: "Just DO It", likes: 8789, dislikes: 420, image: nil)
p8 = Post.create(user_id: liv.id, body: "We are half way there woaho!!", likes: 873, dislikes: 1738, image: nil)
p9 = Post.create(user_id: liv.id, body: "Seeding Posts like a boss", likes: 7824, dislikes: 21, image: nil)

puts "🌱 Seeding Comments..."
c1 = Comment.create(post_id: p1.id, user_id: cameron.id, likes: 5, dislikes: 0, body: "Love the Post")
c2 = Comment.create(post_id: p3.id, user_id: cameron.id, likes: 7, dislikes: 0, body: "Love the Post")
c3 = Comment.create(post_id: p1.id, user_id: liv.id, likes: 9, dislikes: 0, body: "Love the Post")
c4 = Comment.create(post_id: p2.id, user_id: liv.id, likes: 2, dislikes: 0, body: "Love the Post")
c5 = Comment.create(post_id: p2.id, user_id: marco.id, likes: 0, dislikes: 0, body: "Love the Post")
c6 = Comment.create(post_id: p3.id, user_id: marco.id, likes: 1, dislikes: 0, body: "Love the Post")

puts "✅ Done seeding!"
