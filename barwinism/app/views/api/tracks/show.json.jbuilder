json.extract!(
    @track,
    :id,
    :title,
    :body,
    :song_art_url,
    :header_background_url,
    :sound_cloud_url,
    :youtube_url,
    :primary_tag,
    :artist_id,
    :album_id,
    :created_at,
    :updated_at
    )

# json.set! :track do 
#   json.extract!(
#     @track,
#     :id,
#     :title,
#     :body,
#     :song_art_url,
#     :header_background_url,
#     :sound_cloud_url,
#     :youtube_url,
#     :primary_tag,
#     :artist_id,
#     :album_id,
#     :created_at,
#     :updated_at
#     )
# end

# json.set! :artist do
#   json.extract! @track.artist, :name, :id
# end


# the action creator will put it under a key of track
# json.extract! just creates an object with no key
# json.set! creates a key
# so if we use json.set the reducers have to change how they access the aciton

  
