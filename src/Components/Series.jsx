import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './live.css';
import './album.css';

const shows = [
  {
    name: 'Harry Potter',
    image: 'https://i5.walmartimages.com/asr/11a9f800-47ff-4ba4-ac8d-43bd0be5c2e4.b86b11aa6cb832d3761845fe5b3076c1.jpeg',
    shows: [
        { name: "Sorcerer's Stone", img: "https://tinyurl.com/2jubhwaz", link: "https://tsneh.vercel.app/ptwdv33cg6qb" },
        { name: "Chamber of Secrets", img: "https://tinyurl.com/bd4m5tk8", link: "https://tsneh.vercel.app/345i8jirmm9z" },
        { name: "Prisoner of Azkaban", img: "https://tinyurl.com/5655uwsu", link: "https://tsneh.vercel.app/bkkucadkilg2" },
        { name: "Goblet of Fire", img: "https://tinyurl.com/3a8fcukr", link: "https://tsneh.vercel.app/npjd3s7lan6m" },
        { name: "Order of the Phoenix", img: "https://tinyurl.com/2adn39xt", link: "https://tsneh.vercel.app/nrdbut0sdu_e" },
        { name: "Half-Blood Prince", img: "https://tinyurl.com/4jm2nnch", link: "https://tsneh.vercel.app/kdx-2jges2d3" },
        { name: "Deathly Hallows – Part 1", img: "https://tinyurl.com/mw2v2kv7", link: "https://tsneh.vercel.app/2t-crb4gwwhj" },
        { name: "Deathly Hallows – Part 2", img: "https://tinyurl.com/yjb7jhn4", link: "https://tsneh.vercel.app/ornwescf5qhn" },

    ],
  },
  {
    name: 'Goli Soda Rising',
    image: 'https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8676/1726163818676-i',
    shows: [
        { name: "E1", img: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8676/1726163818676-i", link: "https://tsneh.vercel.app/5la3tdequhf7" },
        { name: "E2", img: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8676/1726163818676-i", link: "https://tsneh.vercel.app/g5jc7wqnpl6t" },
        { name: "E3", img: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8676/1726163818676-i", link: "https://tsneh.vercel.app/9ixx7ilfutbz" },
        { name: "E4", img: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8676/1726163818676-i", link: "https://tsneh.vercel.app/hn6z-sx5qeny" },
        { name: "E5", img: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8676/1726163818676-i", link: "https://tsneh.vercel.app/4titeglmmwbn" },
        { name: "E6", img: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8676/1726163818676-i", link: "https://tsneh.vercel.app/0xilr9xpupdr" },
        { name: "E7", img: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8676/1726163818676-i", link: "https://tsneh.vercel.app/u3d7oejuksbs" },
        { name: "E8", img: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8676/1726163818676-i", link: "https://tsneh.vercel.app/yscjfbcbf0nd" },
    ],
  },
  {
    name: 'Chutney Sambar',
    image: 'https://i.ytimg.com/vi/2cPeJDdT9fk/maxresdefault.jpg',
    shows: [
        { name: "E1", img: "https://i.ytimg.com/vi/2cPeJDdT9fk/maxresdefault.jpg", link: "https://tsneh.vercel.app/rt_lggob_wh0" },
        { name: "E2", img: "https://i.ytimg.com/vi/2cPeJDdT9fk/maxresdefault.jpg", link: "https://tsneh.vercel.app/tz1vojc4dk3u" },
        { name: "E3", img: "https://i.ytimg.com/vi/2cPeJDdT9fk/maxresdefault.jpg", link: "https://tsneh.vercel.app/zggfkbsiazod" },
        { name: "E4", img: "https://i.ytimg.com/vi/2cPeJDdT9fk/maxresdefault.jpg", link: "https://tsneh.vercel.app/juq1icdabiry" },
        { name: "E5", img: "https://i.ytimg.com/vi/2cPeJDdT9fk/maxresdefault.jpg", link: "https://tsneh.vercel.app/n8liakhcusf4" },
        { name: "E6", img: "https://i.ytimg.com/vi/2cPeJDdT9fk/maxresdefault.jpg", link: "https://tsneh.vercel.app/tl1wnzlfmnzt" },
    ],
  },
];


const Series = () => {
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

export default Series;
