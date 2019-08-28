class Api::TracksController < ApplicationController
  def show
    @track = Track.find(params[:id])
  end

  def index
    @tracks = Track.all
  end

  def create
    # debugger
    @track = Track.new(track_params)
    @track.user_id = current_user.id
    artist = Artist.find_by_name(params[:track][:artist_input])

    if !artist
      artist = Artist.create!({name: params[:track][:artist_input]})
    end
    
    @track.artist_id = artist.id
    
    if @track.save
      if params[:track][:album_input]
        params[:track][:album_input].values.each do |ele|
          temp_album = Album.find_by_name(ele)
          if !temp_album
            temp_album = Album.create!({title: ele, artist_id: artist.id})
          end
          TrackAlbumJoin.create!({track_id: @track.id, album_id: temp_album.id})
        end
      end
      render "api/tracks/show"
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def update
    @track = Track.find(params[:id])

    if @track.update(track_params)
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
      album_input: []
      )
  end
 
end
