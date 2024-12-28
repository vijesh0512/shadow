import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './live.css';
import './album.css';

const shows = [
  {
    name: 'Squid Game S1',
    image: 'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FjlbrV1Kl4Y8pWXu12SppebRs7On.jpg',
    shows: [
        { name: "Red Light Green Light", image: "https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FvMFJS9LIUUAmQ1thq4vJ7iHKwRz.jpg", link: "https://tinyurl.com/5n95a6wf" },
        { name: "Hell", image: "https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FuacNwki3PqXEFk9Pal9Ng5NwwAI.jpg", link: "https://tinyurl.com/3pb4h97j" },
        { name: "The man with umbrella", image: "https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FxNtgrNEsMXvmRQQtcFuJdbXOjmP.jpg", link: "https://tinyurl.com/5f6zmx3b" },
        { name: "Stick with the team", image: "https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F9cUGOdLN4gmnf3b9ILArnJsJI8Q.jpg", link: "https://tinyurl.com/m5x9v2ff" },
        { name: "A Fair World", image: "https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F2pE9f6drlF7y9rwUw6dh1w6jF5M.jpg", link: "https://tinyurl.com/ycyn76cc" },
        { name: "Gganbu", image: "https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FcohCCQzTe2ncdQczJDUsO0vzxPR.jpg", link: "https://tinyurl.com/4da97enp" },
        { name: "VIPS", image: "https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F4pVfv4HaM5QpFJTHm19p2UI0StN.jpg", link: "https://tinyurl.com/mrxbw29s" },
        { name: "Front man", image: "https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FlOgFVmykN9qlpAoiBSIV2lu7XCS.jpg", link: "https://tinyurl.com/3834ytdt" },
        {name:"One lucky day",image:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FsKeQbHeEUQLyoSdopa0QXm604cz.jpg',link:'https://tinyurl.com/yphnhscj'},
    ],
  },
  {
    name:'Squid Game S2',image:'https://i.ytimg.com/vi/HKcOGaiUQv4/maxresdefault.jpg',shows:[
      {name:'Bread and Lottery',image:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Ffmo7pOmLThRpUEKuMXnnpy6g6DU.jpg',link:'https://s10.dubshare.one/isaiDub.Me_-_Squid_Game_Season_02_Epi_01_.mp4'},
      {name:'Halloween Party',image:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fepisode%2F10774412%2Fscreencap%2F676d12b9dd7a6.jpg',link:'https://s10.dubshare.one/isaiDub.Me_-_Squid_Game_Season_02_Epi_02_.mp4'},
      {name:'001',image:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FyL7phVQmwbBr0IVrDnqsNiPrpwQ.jpg',link:'https://s10.dubshare.one/isaiDub.Me_-_Squid_Game_Season_02_Epi_03_.mp4'},
      {name:'Six Legs',image:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FgbtaPIZeFwViB25zigpU42UALEE.jpg',link:'https://s10.dubshare.one/isaiDub.Me_-_Squid_Game_Season_02_Epi_04_.mp4'},
      {name:'One More Game',image:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F575R0zTaCUtmLjLSsBp3hLl1DQn.jpg',link:'https://s10.dubshare.one/isaiDub.Me_-_Squid_Game_Season_02_Epi_05_.mp4'},
      {name:'O X',image:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fepisode%2F10774416%2Fscreencap%2F676d12edf3409.jpg',link:'https://s10.dubshare.one/isaiDub.Me_-_Squid_Game_Season_02_Epi_06_.mp4'},
      {name:'Friend or Foe',image:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FtO8hO3jWp4JveXmBbPikd4IQbss.jpg',link:'https://s10.dubshare.one/isaiDub.Me_-_Squid_Game_Season_02_Epi_07_.mp4'},
      ]
  },
  { name:'Stranger Things S1',image:'https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FrbnuP7hlynAMLdqcQRCpZW9qDkV.jpg',shows:[ {name:'The Vanishing of Will Byers',image:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FuLES7sRpy7Ih6Kr6XCaYj1GyfTw.jpg',link:'https://tsneh.vercel.app/oetwekdm_zt0'},{name:'The Weirdo on Maple Street',image:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F8iA56ugQyHZmX81wSsNqwXjCE6F.jpg',link:'https://tsneh.vercel.app/yxtzdf1rfjvj'},{name:"Holly, Jolly",image:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F5snULpWQWp7aqFto7UbRcEkEyyS.jpg',link:"https://tsneh.vercel.app/qnssogkh_aza"},{name:" The Body",image:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F60wmC1e20HV8gu688GAhsWxqxPx.jpg',link:"https://tsneh.vercel.app/8ltoyyu8yxuy"},{name:"The Flea and the Acrobat",image:"https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FexT4NW9EdXG1qLZHKJnRpq3gh1H.jpg",link:'https://tsneh.vercel.app/3n4iykgtbo1o'},{name:"The Monster",image:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FlNS6qycyucewz3duTr1tf1LU688.jpg',link:'https://tsneh.vercel.app/zqiu2mhhevsc'},{name:'The Bathtub',image:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FmkZzUTNWYfGwRH2f1TzlRgouypa.jpg',link:'https://tsneh.vercel.app/uzakxwc83mgv'},{name:"The Upside Down",image:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F1teJ5dbuepfqOOs9uYhYTUjr2qs.jpg',link:'https://tsneh.vercel.app/ovxwiwjiv9_f'},],},
  ]
  




const Movies = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    if (currentVideo) {
      setLoading(true);
    }
  }, [currentVideo]);

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
    setThumbnail(video.image);
  };

  return (
    <>
      {currentVideo && (
        <div className="plr">
          {loading && (
            <div className="loading-spinner">
              <div className="spinner"></div>
            </div>
          )}
          <div className="video-wrapper">
            <div className={`video-thumbnail ${loading ? 'visible' : 'hidden'}`}>
              {thumbnail && <img src={thumbnail} alt="Loading..." />}
            </div>
            <ReactPlayer
              url={currentVideo}
              className="video-player"
              playing
              controls
              onReady={() => setLoading(false)}
              onError={() => setLoading(false)}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
      <div className="content">
        {selectedAlbum ? (
          <div className="album-details">
            <button onClick={handleBackClick} className="back-button">
              Back to Movies
            </button>
            <h2 className="hi">{selectedAlbum.name}</h2>
            <div className="play">
              {selectedAlbum.shows.map((video, index) => (
                <div key={index} className="son" onClick={() => handleVideoClick(video)}>
                  <img src={video.image} alt={video.name} />
                  <p>{video.name}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div id="channel-player" className="play">
            {shows.map((album, index) => (
              <div key={index} className="son" onClick={() => handleAlbumClick(album)}>
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

export default Movies;
