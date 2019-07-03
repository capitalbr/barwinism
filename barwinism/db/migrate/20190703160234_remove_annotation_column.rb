class RemoveAnnotationColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :annotations, :highlighted_text
  end
end
