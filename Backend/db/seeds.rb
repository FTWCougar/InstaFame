User.destroy_all
Post.destroy_all
Comment.destroy_all

puts "🌱 Seeding Users..."
cameron = User.create(first_name: "Cameron", last_name: "Millen", username: "FTW_Cougar", password: "123", profile_img:"https://ahandfullofhope.com/wp-content/uploads/2022/12/cameron.png")
liv = User.create(first_name: "Liv", last_name: "Nelson", username: "Shutter_Girl", password: "456", profile_img:"https://ahandfullofhope.com/wp-content/uploads/2022/12/liv.png")
marco = User.create(first_name: "Marco", last_name: "Amador", username: "Lost_Boy", password: "789", profile_img:"https://ahandfullofhope.com/wp-content/uploads/2022/12/marco.png")

puts "🌱 Seeding Posts..."
p1 = Post.create(user_id: cameron.id, body: "Ruby is a rock", likes: 5, dislikes: 2, image: "https://images.unsplash.com/photo-1551122087-f99a4ade46ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cnVieXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")
p2 = Post.create(user_id: liv.id, body: "Active Record set a new record for me", likes: 89, dislikes: 14, image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60")
p3 = Post.create(user_id: cameron.id, body: "JavaScript is the best", likes: 501, dislikes: 500, image: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zmlyc3QlMjBwbGFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60")
p4 = Post.create(user_id: marco.id, body: "Rails makes me want to be derailed", likes: 9, dislikes: 8, image: "https://images.unsplash.com/photo-1623306450218-8b6677802175?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVyYWlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60")
p5 = Post.create(user_id: cameron.id, body: "React reacted to this post", likes: 45, dislikes: 97, image: "https://images.unsplash.com/photo-1603792907191-89e55f70099a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvY2tlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60")
p6 = Post.create(user_id: marco.id, body: "Sinatra the final layer to ruby", likes: 4554, dislikes: 69, image:  "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")
p7 = Post.create(user_id: marco.id, body: "Just DO It", likes: 8789, dislikes: 420, image: "https://images.unsplash.com/photo-1507652955-f3dcef5a3be5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5jb3VyYWdlbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60")
p8 = Post.create(user_id: liv.id, body: "We are half way there woohoo!!", likes: 873, dislikes: 1738, image: "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60")
p9 = Post.create(user_id: liv.id, body: "Seeding Posts like a boss!", likes: 7824, dislikes: 21, image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybCUyMGJvc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60")
p10 = Post.create(user_id: marco.id, body: "Desk goals", likes: 7824, dislikes: 21, image: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNvbXB1dGVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")
p11 = Post.create(user_id: cameron.id, body: "Hard at work", likes: 7824, dislikes: 21, image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcHV0ZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")
p12 = Post.create(user_id: liv.id, body: "Friends don't let friends code alone", likes: 7824, dislikes: 21, image: "https://images.unsplash.com/photo-1543269865-0a740d43b90c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ3fHxjb21wdXRlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")

puts "🌱 Seeding Comments..."
c1 = Comment.create(post_id: p1.id, user_id: cameron.id, likes: 5, dislikes: 0, body: "Love the Post")
c2 = Comment.create(post_id: p3.id, user_id: marco.id, likes: 7, dislikes: 0, body: "Cool Beans")
c3 = Comment.create(post_id: p4.id, user_id: liv.id, likes: 9, dislikes: 0, body: "Hang in there buddy")
c4 = Comment.create(post_id: p2.id, user_id: cameron.id, likes: 2, dislikes: 0, body: "Crushing goals")
c5 = Comment.create(post_id: p5.id, user_id: marco.id, likes: 0, dislikes: 0, body: "Yeah it did!")
c6 = Comment.create(post_id: p6.id, user_id: liv.id, likes: 1, dislikes: 0, body: "Like icing on a cake")
c7 = Comment.create(post_id: p7.id, user_id: liv.id, likes: 1, dislikes: 0, body: "We've got this!!")
c8 = Comment.create(post_id: p8.id, user_id: cameron.id, likes: 1, dislikes: 0, body: "Excellent!")
c9 = Comment.create(post_id: p9.id, user_id: marco.id, likes: 1, dislikes: 0, body: "Great seeds!")
c10 = Comment.create(post_id: p10.id, user_id: liv.id, likes: 1, dislikes: 0, body: "YES!!!")
c11 = Comment.create(post_id: p11.id, user_id: marco.id, likes: 1, dislikes: 0, body: "Haha")
c12 = Comment.create(post_id: p12.id, user_id: cameron.id, likes: 1, dislikes: 0, body: "Coding with friends is the best")
c13 = Comment.create(post_id: p4.id, user_id: cameron.id, likes: 1, dislikes: 0, body: "You're doing great!")
c14 = Comment.create(post_id: p5.id, user_id: liv.id, likes: 0, dislikes: 0, body: "React makes coding fun")
c15 = Comment.create(post_id: p8.id, user_id: marco.id, likes: 1, dislikes: 0, body: "SO EXCITING!!")

puts "✅ Done seeding!"
