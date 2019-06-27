class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.integer :artist_id, null: false
      t.integer :album_id, null: false
      t.string :song_art_url
      t.string :header_background_url
      t.string :sound_cloud_url
      t.string :youtube_url
      t.string :primary_tag, null: false

      t.timestamps
    end
    add_index :tracks, :title, unique: true
    add_index :tracks, :artist_id
    add_index :tracks, :album_id
    add_index :tracks, :primary_tag
  end
end
