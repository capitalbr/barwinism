class Album < ApplicationRecord

  has_many :track_album_joins,
  primary_key: :id,
  foreign_key: :album_id,
  class_name: :TrackAlbumJoin

  has_many :tracks,
  through: :track_album_joins,
  source: :track

  def self.find_by_name(title)
    Album.find_by(title: title)
  end
end
