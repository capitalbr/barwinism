json.set! :track do 
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
end

json.set! :albums do
  @track.albums.each do |album|
    json.set! album.id do
      json.id album.id
      json.title album.title
      json.artist_id album.artist_id
      json.cover_art_url album.cover_art_url
    end
  end
end

json.set! :annotations do
  @track.annotations.each do |anno|
    json.set! anno.anno_id do
      json.id anno.id
      json.anno_id anno.anno_id
      json.user_id anno.user_id
      json.track_id anno.track_id
      json.body anno.body
      json.upvotes anno.upvotes
    end
  end
end