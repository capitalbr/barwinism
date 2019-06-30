class TrackAlbumJoin < ApplicationRecord

  belongs_to :track,
  primary_key: :id,
  foreign_key: :track_id,
  class_name: :Track

  belongs_to :album,
  primary_key: :id,
  foreign_key: :album_id,
  class_name: :Album
end
