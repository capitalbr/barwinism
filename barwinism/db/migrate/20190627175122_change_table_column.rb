class ChangeTableColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :tracks, :body, :text
  end
end
