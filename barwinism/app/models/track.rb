class Track < ApplicationRecord
  validates_length_of :body, :maximum => 20000
  belongs_to :artist
  belongs_to :album
end
