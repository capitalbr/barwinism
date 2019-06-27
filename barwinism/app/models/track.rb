class Track < ApplicationRecord
  validates :artist, length: {minimum: 1, allow_nil: true}
  validates :album, length: {minimum: 1, allow_nil: true}
  attr_reader :artist, :album
  # def initialize(params)
  #   @artist = params[:track][:artist]
  #   @album = params[:track][:album]
  # end
end
