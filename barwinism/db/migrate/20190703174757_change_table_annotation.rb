class ChangeTableAnnotation < ActiveRecord::Migration[5.2]
  def change
    change_column :annotations, :anno_id, :string, null: false
  end
end
