import React, { useState, useEffect } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import './live.css';
import './album.css';


const shows = [
  {
    name: 'Mr Bean',
    image: 'https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220',
    shows: [
        { name: "S1 E1", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/mrpzt7kc3dfq" },
        { name: "S1 E2", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/md_dajgqfrsg" },
        { name: "S1 E3", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/_ihwbjq9ikre" },
        { name: "S1 E4", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/mdcq_3owbolz" },
        { name: "S1 E5", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/bwgb_mekvqqb" },
        { name: "S1 E6", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/mi9haejlcqhz" },
        { name: "S1 E7", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/blalxeb13deg" },
        { name: "S1 E8", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/-nsgs3j5pyx5" },
        { name: "S1 E9", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/nrsujogrkhcz" },
        { name: "S1 E10", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/8buaumrpzjvn" },
        { name: "S1 E11", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/osmghrcw9dtx" },
        { name: "S1 E12", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/waaertqfibwo" },
        { name: "S1 E13", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/ghvhnzbybcgf" },
        { name: "S1 E14", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/3ao3bt42594g" },
        { name: "S1 E15", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/vran0igox8ip" },
        { name: "S1 E16", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/lmbzwkresqft" },
        { name: "S1 E17", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/d77tydafegpt" },
        { name: "S1 E18", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/5flej0w87ebz" },
        { name: "S1 E19", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/zrp6bng1rgyw" },
        { name: "S1 E20", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/yfqvszlz_j7u" },
        { name: "S1 E21", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/p4q8ct-vec6y" },
        { name: "S1 E22", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/wawklxlycoq1" },
        { name: "S1 E23", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/8_wnwegy1vwt" },
        { name: "S1 E24", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/zyji2x3c8hd2" },
        { name: "S1 E25", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/tggcfhyl1pgy" },
        { name: "S1 E26", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/l-mxxbmvl6_6" },
        { name: "S1 E27", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/9odzkx-gzcvt" },
        { name: "S1 E28", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/qhkoti6hzjwr" },
        { name: "S1 E29", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/rlictba_8pap" },
        { name: "S1 E30", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/mjmq3y-qqywm" },
        { name: "S1 E31", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/glvmvzmahedj" },
        { name: "S1 E32", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/aheeedpfmzfi" },
        { name: "S1 E33", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/k8xgu8g8rphe" },
        { name: "S1 E34", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/wfnbimydo5yf" },
        { name: "S1 E35", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/bcd1nkrjpzkg" },
        { name: "S1 E36", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/bcd1nkrjpzkg" },
        { name: "S1 E37", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/q3bxofm3c8hg" },
        { name: "S1 E38", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/kpbba79qsacf" },
        { name: "S1 E39", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/vcafikr2lqk3" },
        { name: "S1 E40", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/x8nwy1iruhyi" },
        { name: "S1 E41", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/leipewoplchq" },
        { name: "S1 E42", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/nmolkhrqboes" },
        { name: "S1 E43", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/b-939rn-35_e" },
        { name: "S1 E44", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/-9smhpjvbaup" },
        { name: "S1 E45", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/en5hojyiqflu" },
        { name: "S1 E46", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/8eo5onq8phq5" },
        { name: "S1 E47", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/efdjhzucggbp" },
        { name: "S1 E48", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/tbp1ql7yqd_w" },
        { name: "S1 E49", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/cmcmbccepize" },
        { name: "S1 E50", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/q4zb_p4syigj" },
        { name: "S1 E51", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/1atngaq2j4cm" },
        { name: "S1 E52", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "https://tsneh.vercel.app/ibju5otdorbc" },
        // { name: "S1 E4", img: "https://tse1.mm.bing.net/th?id=OIP.sL_r-AGNlvCG6MflKcWlWQHaEK&pid=Api&P=0&h=220", link: "" },
    ],
  },

  {
    name: 'Phineas and Ferb',
    image: 'https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg',
    shows: [
        { name: "S1 E1", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/qgnhglohuemi" },
        { name: "S1 E2", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/insmiecgjpsn" },
        { name: "S1 E3", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/epkqg23rq9ha" },
        { name: "S1 E4", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/r8y9n2hhs8on" },
        { name: "S1 E5", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/_5nvmdpglyv6" },
        { name: "S1 E6", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/rk57orklijux" },
        { name: "S1 E7", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/yqsy7dy8bx9g" },
        { name: "S1 E8", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/sts-0_ly3o16" },
        { name: "S1 E9", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/euehvspc0kil" },
        { name: "S1 E10", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/vdhrhb3-g5py" },
        { name: "S1 E11", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/qppex8ukuzql" },
        { name: "S1 E12", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/dayae_axpytm" },
        { name: "S1 E13", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/o2igosobpmej" },
        { name: "S1 E14", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/ykcev67a6ift" },
        { name: "S1 E15", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/zqvrqqcbseyo" },
        { name: "S1 E16", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/jfigj-1jzpuh" },
        { name: "S1 E17", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/tubn4fd83vex" },
        { name: "S1 E18", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/ayhrni2hsxk6" },
        { name: "S1 E19", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/_edc0idyvoxv" },
        { name: "S1 E20", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/ofd1qglkc3bb" },
        { name: "S1 E21", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/1ur-wew4aifq" },
        { name: "S1 E22", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/2bx2rzekubgt" },
        { name: "S1 E23", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/_ggft0er_ipo" },
        { name: "S1 E24", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/kwdwgfs8zd7d" },
        { name: "S1 E25", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/xxnsj-zp291o" },
        { name: "S1 E26", img: "https://pics.filmaffinity.com/phineas_and_ferb_tv_series-177336107-large.jpg", link: "https://tsneh.vercel.app/xxnsj-zp291o" },
    ],
  },
];

const Movies = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [thumbnail, setThumbnail] = useState(null);
  const playerRef = React.useRef(null);

  useEffect(() => {
    if (currentVideo) {
      setLoading(true); // Show loading spinner when video is changing

      if (playerRef.current) {
        // Update the video source
        playerRef.current.source = {
          type: 'video',
          sources: [
            { src: currentVideo, type: 'video/mp4', size: 720 },
            { src: currentVideo.replace('.mp4', '_480.mp4'), type: 'video/mp4', size: 480 },
             { src: currentVideo.replace('.mp4', '_1080.mp4'), type: 'video/mp4', size: 1080 },
          ],
        };

        playerRef.current.play(); // Ensure the video starts playing automatically
      } else {
        // Initialize Plyr with additional settings
        playerRef.current = new Plyr('.video-player', {
          controls: [
            'play',
            'progress',
            'current-time',
            'mute',
            'volume',
            'captions',
            'settings',
            'pip',
            'airplay',
            'fullscreen',
          ],
          settings: ['quality', 'speed'],
          quality: {
            default: 720,
            options: [1080,720, 480],
            forced: true,
            onChange: (quality) => {
              console.log(`Quality changed to ${quality}`);
            },
          },
          autoplay: true, // Auto play the video once it's loaded
        });

        playerRef.current.source = {
          type: 'video',
          sources: [
            { src: currentVideo, type: 'video/mp4', size: 720 },
            { src: currentVideo.replace('.mp4', '_480.mp4'), type: 'video/mp4', size: 480 },
             { src: currentVideo.replace('.mp4', '_1080.mp4'), type: 'video/mp4', size: 1080 },
          ],
        };

        // Automatically play the video once Plyr is initialized
        playerRef.current.play();
      }

      // Event listener to hide loading when video starts playing
      playerRef.current.on('playing', () => {
        setLoading(false); // Hide loading spinner once the video starts playing
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [currentVideo]);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
    setCurrentVideo(null); // Reset video on album change
  };

  const handleBackClick = () => {
    setSelectedAlbum(null);
    setCurrentVideo(null); // Reset video on back click
  };

  const handleVideoClick = (video) => {
    setCurrentVideo(video.link); // Set the MP4 video source
    setThumbnail(video.img); // Set the video thumbnail
  };

  return (
    <>
      {currentVideo && (
        <div className="plr">
          {loading && (
            <div className="loading-spinner">
              <div className="spinner"></div> {/* Add spinner styles below */}
            </div>
          )}
          <div className="video-wrapper">
            {/* Show thumbnail while loading */}
            <div className={`video-thumbnail ${loading ? 'visible' : 'hidden'}`}>
              {thumbnail && <img src={thumbnail} alt="Loading..." />}
            </div>
            <video className="video-player" />
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
                  <img src={video.img} alt={video.name} />
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
