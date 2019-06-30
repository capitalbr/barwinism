class CreateTrackAlbumJoin < ActiveRecord::Migration[5.2]
  def change
    create_table :track_album_joins do |t|
      t.integer :track_id, null: false
      t.integer :album_id, null: false
    end
    add_index :track_album_joins, [:track_id, :album_id]
  end
end
