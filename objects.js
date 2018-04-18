
var playlist = {
  'bon jovi': "you give love a bad name"
};

console.log(playlist)

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle;
  return(playlist);
}
