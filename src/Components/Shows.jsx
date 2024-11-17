import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './live.css';
import './album.css';


const shows = [
  {
    name:'Season 3',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9WVfFrWMjrtoI6N4gmZlbf2Oseuu6bLUGafR7CR5NGap2_psoDh1rD5s&s=10',shows:[
      {name:'Day 0',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fgml2ElsU6NFUNVJNTZqNcBUyTAV.jpg',link:'https://player1.mrfooll.xyz/V3/watch/221945/file.mkv?hash=AgADug'},
    ]
  },
  {
    name: "TCDC",
    image: 'https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg',
    shows:[
      { name: "Finale", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://herokustreamapiiiiiii-75c3359a5ad7.herokuapp.com/AgADYR2510558" },
      { name: "18", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tsneh.vercel.app/n5ikl2exctsj" },
      { name: "17", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tsneh.vercel.app/wsrhgzd1fky-" },
      { name: "16", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tsneh.vercel.app/ysuourwdekzm" },
      { name: "15", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tsneh.vercel.app/eqe9qownfcrw" },
        { name: "14", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/3949z54t" },
        { name: "13", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/cvyv69zr" },
        { name: "12", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/yhrfy8px" },
        { name: "11", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/ye983f8v" },
        { name: "10", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/mryf9sjn" },
        { name: "9", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/4x7vsf4m" },
        { name: "8", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/2xmch459" },
        { name: "7", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/mv87uuzj" },
        { name: "6", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/yc4vycrz" },
        { name: "5", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/yyps5js4" },
        { name: "4", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/afddfmbf" },
        { name: "3", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/kewzmddx" },
        { name: "2", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/zfn39fu7" },
        { name: "1", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/y872r5f8" },

    ]
  },
];

const Shows = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
    setCurrentVideo(null);
  };

  const handleBackClick = () => {
    setSelectedAlbum(null);
    setCurrentVideo(null);
  };

  const handleVideoClick = (video) => {
    setCurrentVideo(video.link);
  };

  return (
    <>
      {currentVideo && (
        <div className='plr'>
            <ReactPlayer
            url={currentVideo}
            controls
            playing
            pip={true} // Enable picture-in-picture
            config={{
                file: {
                attributes: {
                    controlsList: 'nodownload' // Remove download button
                }
                }
            }}
/>
        </div>
      )}
      <div className='content'>
        {selectedAlbum ? (
          <div className='album-details'>
            <button onClick={handleBackClick} className='back-button'>Back to Shows</button>
            <h2>{selectedAlbum.name}</h2>
            <div className='play'>
              {selectedAlbum.shows.map((video, index) => (
                <div key={index} className='son' onClick={() => handleVideoClick(video)}>
                  <img src={video.img} alt={video.name} />
                  <p>{video.name}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div id='channel-player' className='play'>
            {shows.map((album, index) => (
              <div key={index} className='son' onClick={() => handleAlbumClick(album)}>
                <img src={album.image} alt={album.name} />
                <p>{album.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Shows;
