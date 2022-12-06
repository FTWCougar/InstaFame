class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.text :body
      t.integer :likes
      t.integer :dislikes
      t.string :image
      t.belongs_to :user
      t.timestamps
    end
  end
end
