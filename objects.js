var playlist = {person: "song"}


function updatePlaylist(playlist, artist, song){
  delete playlist.person
  playlist.artist = [song]
  return playlist
}

function removeFromPlaylist(artist){
  delete playlist.artist
  return playlist
}
