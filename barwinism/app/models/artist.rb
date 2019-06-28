class Artist < ApplicationRecord
  has_many :tracks
  
  def self.find_by_name(name)
    Artist.find_by(name: name)
  end
end
