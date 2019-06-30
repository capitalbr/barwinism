class ChangeTracksColumnAlbumId2 < ActiveRecord::Migration[5.2]
  def change
    change_column :tracks, :album_id, :integer, null: true
  end
end
