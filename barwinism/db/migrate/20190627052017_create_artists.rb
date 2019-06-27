class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.string :bio
      t.string :image_url

      t.timestamps
    end
    add_index :artists, :name, unique: true
  end
end
