import React, { useState, useRef, useEffect } from 'react';
import './live.css';
import './album.css';

const ALBUMS = [
  {
    
    name:"Amaran",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7E495mkbqZkL3k5mvSc9_PqyoZ-jUnWKU6mlpZJItsZiAZneU3sE-cYBN&s=10",songs:[{name:"Hey Minnale",image:"https://i.scdn.co/image/ab67616d0000b273d29a8598a39461ddb2a15953",audio:"https://aac.saavncdn.com/332/7bf562f6c87efd3a776aab5f35393801_160.mp4"},]},
  
  { 
    name: 'Vettaiyan', 
    image:'https://upload.wikimedia.org/wikipedia/en/6/68/Vettaiyan_poster.jpg', 
    songs: [
      {
        name: "Manasilaayo",
        image: "https://keralakaumudi.com/web-news/en/2024/09/NMAN0527509/image/thumb/manju-warrier-dance-rajin.1.2895901.webp",
        audio: "https://aac.saavncdn.com/130/927b03db8d709caf8cd750ccfdb7bbfd_96.mp4"
      },
      {
        name: "Hunter Vantar",
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202409/hunter-vantaar-200457802-16x9_0.jpg?VersionId=Y2YT0bzH2Sdo5Lc_hA.MqEJPNVIZGAwU&size=690:388",
        audio: "https://aac.saavncdn.com/156/a9ae1ee8b8a43c0fc52d03c45be380ff_96.mp4"
      },
    ] 
  },
  { 
    name: 'GOAT', 
    image:'https://preview.redd.it/goat-first-look-v0-urgbut9pjm9c1.jpeg?width=640&crop=smart&auto=webp&s=30ca2d4168fd1ae05849f1c9d728db87966a3fbc', 
    songs: [
      {
        name: "Whistle Podu",
        image: "https://i.ytimg.com/vi/5GSt99nxiJQ/maxresdefault.jpg",
        audio: "https://aac.saavncdn.com/829/8a829e03099a158056751615cc6abe91_96.mp4"
      },
      {
        name: "Chinna Chinna Knagal",
        image: "https://static.tnn.in/thumb/msid-111192076,width-1280,height-720,resizemode-75/111192076.jpg?quality=100",
        audio: "https://aac.saavncdn.com/829/d2871b016aabfc0ba69eeb70386011a7_96.mp4"
      },
      {
        name: "Matta",
        image: "https://i.ytimg.com/vi/lrKE2LzH3CU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCFJwrvCfGXffFbRBk2uzuMGs6tyQ",
        audio: "https://aac.saavncdn.com/829/8e65980abebbac11a936160f2b5b9a3e_96.mp4"
      },
      {
        name: "Spark",
        image: "https://1847884116.rsc.cdn77.org/telugu/home/spark-050824-1.jpg",
        audio: "https://aac.saavncdn.com/829/ce2020df723e5cdbf420e3bc7bea6cd9_96.mp4"
      },
    ] 
  },
  { 
    name: 'Jailer', 
    image:'https://upload.wikimedia.org/wikipedia/en/c/cb/Jailer_2023_Tamil_film_poster.jpg', 
    songs: [
      {
        name: "Kavala",
        image: "https://static.toiimg.com/thumb/msid-101548900,width-1280,resizemode-4/101548900.jpg",
        audio: "https://aac.saavncdn.com/187/49797372d021638077d8a6b749068bc8_96.mp4"
      },
      {
        name: "Hukum",
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202307/748680-hukum-three_four.jpg?VersionId=helyHPHWgAM4XV_cixrp4PqAnBiz21HM",
        audio: "https://aac.saavncdn.com/187/0c4d0aee91a3ac81d4b645ec448a2960_96.mp4"
      },
      {
        name: "Rathamarey",
        image: "https://media.dailythanthi.com/h-upload/2023/08/05/1430343-jailer-song-07.webp",
        audio: "https://aac.saavncdn.com/187/77774878dd3b341405dcbc524ddb081a_96.mp4"
      },
    ] 
  },
  { 
    name: 'RAYAN', 
    image:'https://m.media-amazon.com/images/M/MV5BODJhYjcwZTktZWY1Yy00ODNlLTg1MDQtOTdmZDliNWIyMmFhXkEyXkFqcGc@._V1_.jpg', 
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
          image: "https://m.media-amazon.com/images/M/MV5BODJhYjcwZTktZWY1Yy00ODNlLTg1MDQtOTdmZDliNWIyMmFhXkEyXkFqcGc@._V1_.jpg",
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
            audio: "https://aac.saavncdn.com/195/436dad27620ecae7dab6ea4b88b71f71_96.mp4"
          },
      ] 
  },
];

const Album = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    const audio = audioRef.current;

    if (currentSong) {
      audio.src = currentSong.audio;
      audio.play().catch((error) => console.error("Audio play error:", error));
      
      const updateCurrentTime = () => {
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
      };

      audio.addEventListener('timeupdate', updateCurrentTime);
      
      return () => {
        audio.pause();
        audio.removeEventListener('timeupdate', updateCurrentTime);
      };
    } else {
      audio.pause();
    }
  }, [currentSong]);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
    setCurrentSong(null);
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const handleBackClick = () => {
    setSelectedAlbum(null);
    setCurrentSong(null);
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const handleSongClick = (song) => {
    if (currentSong && currentSong.audio === song.audio) {
      setIsPlaying(!isPlaying);
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => console.error("Audio play error:", error));
      }
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  const handleSliderChange = (event) => {
    const value = event.target.value;
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => console.error("Audio play error:", error));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {selectedAlbum ? (
        <div className='album-details'>
          <br />
          <button onClick={handleBackClick} className='back-button'>Back to Albums</button>
          <h2 style={{ color: '#b3a6a6' }}>{selectedAlbum.name}</h2><br />
          <div className='songs'>
            {selectedAlbum.songs.map((song, index) => (
              <div key={index} className='song' onClick={() => handleSongClick(song)}>
                <img src={song.image} alt={song.name} />
                <p>{song.name}</p>
              </div>
            ))}
          </div>
          <br />
          {currentSong && (
            <div className='audio-controls'>
              <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
              <input
                type='range'
                min='0'
                max={duration || 0}
                value={currentTime}
                onChange={handleSliderChange}
              />
              <div>
                {Math.floor(currentTime)} / {Math.floor(duration)}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div id='channel-player' className='play'>
          {ALBUMS.map((album, index) => (
            <div key={index} className='son' onClick={() => handleAlbumClick(album)}>
              <img src={album.image} alt={album.name} />
              <p>{album.name}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Album;
