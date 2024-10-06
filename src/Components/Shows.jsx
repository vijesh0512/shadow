import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './live.css';
import './album.css';

const shows = [
  // {
  //   name: 'CWC',
  //   image: 'https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220',
  //   shows: [
  //       { name: "24/08/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/5xy66ujj" },
  //       { name: "18/08/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/3cjhrwdy" },
  //       { name: "17/08/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/63c8wb67" },
  //       { name: "11/08/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/2x844mym" },
  //       { name: "10/08/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/mrxmasx4" },
  //       { name: "04/08/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/bdervm2w" },
  //       { name: "03/08/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/ykfkvabj" },
  //       { name: "28/07/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/3sz2sb29" },
  //       { name: "27/07/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/359cc6kv" },
  //       { name: "21/07/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/pmvbcsre" },
  //       { name: "20/07/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/3w5t2aeb" },
  //       { name: "14/07/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/3h735yv2" },
  //       { name: "13/07/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/4yd6yp7s" },
  //       { name: "07/07/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/4zeh9axd" },
  //       { name: "06/07/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/3j3zr5as" },
  //       { name: "30/06/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/j2ej5u9t" },
  //       { name: "29/06/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/3yduu96c" },
  //       { name: "23/06/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/mtr5dack" },
  //       { name: "22/06/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/4953mzr5" },
  //       { name: "16/06/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/7jks5sud" },
  //       { name: "15/06/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/4kyyds7v" },
  //       { name: "09/06/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/bdz7y22c" },
  //       { name: "08/06/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/k4tda8d2" },
  //       { name: "02/06/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/yjxrdfvh" },
  //       { name: "01/06/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/4fnbfefm" },
  //       { name: "26/05/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/a7vnmxb6" },
  //       { name: "25/05/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/y2u6cm8b" },
  //       { name: "19/05/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/43zv382a" },
  //       { name: "18/05/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/2f7enhjw" },
  //       { name: "12/05/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/mrxkrxnr" },
  //       { name: "11/05/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/8kbxfn92" },
  //       { name: "05/05/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/2fsbffkr" },
  //       { name: "04/05/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/mrp5z3f7" },
  //       { name: "28/04/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/3hfp89re" },
  //       { name: "27/04/2024", img: "https://tse3.mm.bing.net/th?id=OIP.JYSw9iWAlUciZJAEwy90BgAAAA&pid=Api&P=0&h=220", link: "https://tinyurl.com/mhbzjxcr" }
  //   ],
  // },
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
