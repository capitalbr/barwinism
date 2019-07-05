
@tracks.each do |track|
  json.set! track.id do
    json.id track.id
    json.title track.title
    json.song_art_url track.song_art_url
    json.primary_tag track.primary_tag
    json.artist track.artist.name
  end
end
