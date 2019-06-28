class Api::TracksController < ApplicationController
  def show
    # @track = Track.includes(:artist).find(params[:id])
    @track = Track.find(params[:id])
  end
  def create
    @track = Track.new(track_params)
    @track.user_id = current_user.id
    artist = Artist.find_by_name(params[:track][:artist])
    
    
    if !artist
      artist = Artist.create!({name: params[:track][:artist]})
    end
    
    @track.artist = artist
    
    if params[:track][:album]
      album = Album.find_by_name(params[:track][:album])
      if !album
        album = Album.create!({title: params[:track][:album], artist_id: artist.id})
      end
      @track.album = album
    end
    
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
      :artist_id,
      :album_id
      )
  end
 
end
