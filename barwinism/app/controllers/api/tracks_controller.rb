class Api::TracksController < ApplicationController
  def show
    # @track = Track.includes(:artist).find(params[:id])
    @track = Track.find(params[:id])
  end
  def create
    @track = Track.new(track_params)
    @track.user_id = current_user.id
    artist = Artist.find_by_name(params[:track][:artist_input])
    
    
    # incase user does uppercase letters.
    # lower_case = params([:track][:artist]).downcase
    # artist = Artist.find_by_name(lower_case)

    
    
    if !artist
      artist = Artist.create!({name: params[:track][:artist_input]})

      # incase user does uppercase letters.
      # artist = Artist.create!({name: lower_case})
    end
    
    @track.artist_id = artist.id
    
    if params[:track][:album_input]
      album = Album.find_by_name(params[:track][:album_input])
      if !album
        album = Album.create!({title: params[:track][:album_input], artist_id: artist.id})
      end
      @track.album_id = album.id
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
      :artist_input,
      :album_input
      )
  end
 
end
