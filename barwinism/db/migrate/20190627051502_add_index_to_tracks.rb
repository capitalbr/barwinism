class AddIndexToTracks < ActiveRecord::Migration[5.2]
  def change
    add_index :tracks, :user_id
  end
end
