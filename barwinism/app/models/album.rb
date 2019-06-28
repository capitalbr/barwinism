class Album < ApplicationRecord

  has_many :tracks

  def self.find_by_name(title)
    Album.find_by(title: title)
  end
end
