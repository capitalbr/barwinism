class ChangeAnnotationTable < ActiveRecord::Migration[5.2]
  def change
    add_column :annotations, :anno_id, :integer, null: false
  end
end
