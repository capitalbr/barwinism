class Album < ApplicationRecord
  def self.find_by_name(title)
    Album.find_by(title: title)
  end
end
