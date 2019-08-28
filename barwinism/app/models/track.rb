class Track < ApplicationRecord
  validates_length_of :body, :maximum => 20000
  validates :body, presence: true
  validates :artist_input, :album_input, presence: true, allow_nil: true
  validates :title, uniqueness: true, presence: true
  validates :primary_tag, presence: true
  belongs_to :artist

  has_many :track_album_joins,
  primary_key: :id,
  foreign_key: :track_id,
  class_name: :TrackAlbumJoin

  has_many :albums,
  through: :track_album_joins,
  source: :album

  has_many :annotations

  attr_reader :artist_input, :album_input
 

  def artist_input=(artist_input)
    @artist_input = artist_input
  end

  def album_input=(album_input = [])
    @album_input = album_input
  end
end
