json.array!(@albums) do |album|
  json.set! album.id do
    json.id = album.id
    json.title album.title
    json.artist_id album.artist_id
    json.cover_art_url
  end
end