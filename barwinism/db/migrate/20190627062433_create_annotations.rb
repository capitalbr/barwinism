class CreateAnnotations < ActiveRecord::Migration[5.2]
  def change
    create_table :annotations do |t|
      t.integer :user_id, null: false
      t.integer :track_id, null: false
      t.string :body, null: false
      t.string :highlighted_text, null: false
      t.integer :upvotes

      t.timestamps
    end
    add_index :annotations, :user_id
    add_index :annotations, :track_id
    add_index :annotations, :upvotes
  end
end
