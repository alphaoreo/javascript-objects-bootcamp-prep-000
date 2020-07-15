var playlist = {"artist" : "song"}
pl

function updatePlaylist(playlist,artist,song){
  playlist.artist = song
  return playlist
}

function removeFromPlaylist(artist){
  delete playlist.artist
  return playlist
}
