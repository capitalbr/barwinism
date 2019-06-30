class ChangeTracksColumnAlbumId < ActiveRecord::Migration[5.2]
  def change
    change_column :tracks, :album_id, :integer
  end
end
