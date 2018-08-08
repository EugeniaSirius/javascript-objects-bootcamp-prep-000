var playlist = {artist: 'song title'}

function updatePlaylist(playlist,artistName,songTitle)  {
  playlist[artistName]=songTitle
  return playlist
}

function removeFromPlaylist(playlist,artistName:'Slowdive')  {
 delete playlist.artistName
  return playlist
}