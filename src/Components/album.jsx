import React, { useState, useRef } from 'react';

const albums = [
  { 
    name: 'RAYAN', 
    image: 'https://tse2.mm.bing.net/th?id=OIF.3lQ%2fp19xdJKwDmcdwVu%2b8w&pid=Api&P=0&h=220', 
    songs: [
      {
        name: "Adangatha Asuran",
        image: "https://i.ytimg.com/vi/rsouMX_N56E/maxresdefault.jpg",
        audio: "https://aac.saavncdn.com/275/4b988d817ffa35407cee1a306e7bca8f_160.mp4"
      },
      {
        name: "Water Packet",
        image: "https://tse3.mm.bing.net/th?id=OIP.YLDc6NKQ5q__7-ISeVWeAAHaEK&pid=Api&P=0&h=220",
        audio: "https://aac.saavncdn.com/275/86db4085f978b305a23d666daf01b85e_160.mp4"
      },
      {
        name: "Oh Raya",
        image: "https://tse2.mm.bing.net/th?id=OIF.3lQ%2fp19xdJKwDmcdwVu%2b8w&pid=Api&P=0&h=220",
        audio: "https://aac.saavncdn.com/275/1aa7e8897f9930e8203853f74838bc7d_160.mp4"
      },
    ] 
  },
  { 
    name: '3', 
    image: 'https://c.saavncdn.com/244/3-Telugu-2012-500x500.jpg', 
    songs: [
      {
        name: "Kolaveri",
        image: "https://tse1.mm.bing.net/th?id=OIP.UMpdWfnaDj9fNtLHjOtG6wHaHa&pid=Api&P=0&h=220",
        audio: "https://aac.saavncdn.com/195/83f3042097cdca8e1c2ce1e44f370dda_96.mp4"
      },
      {
        name: "Kannalaga",
        image: "https://c.saavncdn.com/244/3-Telugu-2012-500x500.jpg",
        audio: "https://aac.saavncdn.com/195/2c5188170076261cd37abdad8ff0caa2_96.mp4"
      },
      {
        name: "Po Nee Po",
        image: "https://tamillyrics143.com/wp-content/uploads/2017/07/Po-Nee-Po-Song-Lyrics.jpg",
        audio: "https://aac.saavncdn.com/275/1aa7e8897f9930e8203853f74838bc7d_160.mp4"
      },
    ] 
  },
  {
    name:"Amaran",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7E495mkbqZkL3k5mvSc9_PqyoZ-jUnWKU6mlpZJItsZiAZneU3sE-cYBN&s=10",songs:[{name:"Hey Minnale",image:"https://i.scdn.co/image/ab67616d0000b273d29a8598a39461ddb2a15953",audio:"https://aac.saavncdn.com/332/7bf562f6c87efd3a776aab5f35393801_160.mp4"},]},
];

const AlbumSongs = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const audioRef = useRef(null);

  const handlePlay = async (song) => {
    if (!song) return;

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const newAudio = new Audio(song.audio);
    audioRef.current = newAudio;

    try {
      await newAudio.play();
      console.log("Now playing:", song.name);
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  return (
    <div>
      <h1>Albums</h1>
      {selectedAlbum ? (
        <div>
          <h2>{selectedAlbum.name} Songs</h2>
          <button onClick={() => setSelectedAlbum(null)}>Back to Albums</button>
          <div className='player'>
            {selectedAlbum.songs.map(song => (
              <div key={song.name} className='song' onClick={() => handlePlay(song)}>
                <img src={song.image} alt={song.name} />
                <p>{song.name}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='albums'>
          {albums.map(album => (
            <div key={album.name} className='album' onClick={() => setSelectedAlbum(album)}>
              <img src={album.image} alt={album.name} />
              <p>{album.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AlbumSongs;
