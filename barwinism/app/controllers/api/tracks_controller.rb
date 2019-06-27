class Api::TracksController < ApplicationController
  def create
    @track = Track.new(track_params)
    @track.user_id = current_user.id;
    # artist = Artist.find_by_name(params[:track][:artist])
    # album = Album.find_by_name(params[:track][:album])
    
    # if !artist
    #   artist = Artist.create!({name: artist})
    # end

    # if !album
    #   album = Album.create!({title: album, artist_id: artist.id})
    # end

    # @track.artist_id = artist.id
    # @track.album_id = album.id

    if @track.save
      render "api/tracks/show"
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  private
   def track_params
    params.require(:track)
    .permit(
      :title,
      :body,
      :song_art_url,
      :header_background_url,
      :sound_cloud_url,
      :youtube_url,
      :primary_tag,
      :artist,
      :album,
      :artist_id,
      :album_id
      )
  end
 
end
