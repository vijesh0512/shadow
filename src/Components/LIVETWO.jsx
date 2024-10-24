
import './live.css';

const channels = [
  //{ name: 'Vijay Takkar', image: 'https://news.indiantvinfo.com/media/2022/09/Logo-of-Vijay-Takkar-Channel-300x300.png', link: 'https://stream.vstartv.org:3511/hybrid/play.m3u8' },
<<<<<<< HEAD
  //{ name: 'SS Tamil', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQop8ucdt1JVIfgEzRt4K8A6AoRZ-DfftdXvSBfE2Pm8IBKBfA9Jwo61Es4&s=10',link:'https://vaathala00.github.io/stream/tamil/master.m3u8?&play_token=join@vaathala1'},

 { name: 'SS Tamil', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQop8ucdt1JVIfgEzRt4K8A6AoRZ-DfftdXvSBfE2Pm8IBKBfA9Jwo61Es4&s=10',link:'https://tsneh.vercel.app/6_b9dt7ybe9i'},
=======
// { name: 'SS Tamil', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQop8ucdt1JVIfgEzRt4K8A6AoRZ-DfftdXvSBfE2Pm8IBKBfA9Jwo61Es4&s=10',link:'https://tsneh.vercel.app/6_b9dt7ybe9i'},
>>>>>>> eb2c1f6a4fe22cbabaff9dcf466772959ff24550
  { name: 'Vijay Super', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQjonzzKzBGJJKpe1_FrbiyAwiMGAEGftloixlGuyIqiS6rRIkFTDArP4&s=10', link: 'https://tinyurl.com/yc3mav2k' },
  { name: 'Star Vijay', image: 'https://tinyurl.com/2heavac5', link: 'https://tinyurl.com/ycxsyc5f'},
  { name: 'Sun TV', image: 'https://tinyurl.com/55rjk5ka', link: 'https://tinyurl.com/3upjsfn8'},
  { name: 'K TV', image: 'https://seeklogo.com/images/K/ktv-logo-703754480A-seeklogo.com.png', link: 'https://tsneh.vercel.app/fh2qaalwcsga'},
  { name: 'Sun Music', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Sun_Music_%28No_Background%29.png', link: 'https://tsneh.vercel.app/hexa8dvnu9xs' },
  { name: 'Zee Tamil', image: 'https://www.ethnicchannels.com/images/channeldetail/zee-tamil/ZEE-TAMIL.png', link: 'https://tinyurl.com/yc5zn3hs' },
  { name: 'Colors Tamil', image: 'https://tinyurl.com/yc2kz4ck', link: 'https://tinyurl.com/5ew7vkmj' },
  { name: 'Thanthi One', image: 'https://pbs.twimg.com/profile_images/1782026072185339904/r41WPxGJ_400x400.jpg', link: 'https://249553662f3e.ap-south-1.playback.live-video.net/api/video/v1/ap-south-1.588204940461.channel.Sx8XPoik8VX2.m3u8' },
  { name: 'Kalaignar TV', image: 'https://tsneh.vercel.app/fzqicp5wkped', link: 'https://segment.yuppcdn.net/240122/kalaignartv/playlist.m3u8' },
  { name: 'Siripoli', image: 'https://tsneh.vercel.app/bril2azbth2y', link: 'https://segment.yuppcdn.net/240122/siripoli/playlist.m3u8' },
  { name: 'Isaiaruvi', image: 'https://tsneh.vercel.app/wjqhyyohoqcc', link: 'https://segment.yuppcdn.net/140622/isaiaruvi/playlist.m3u8' },
  { name: 'Murasu', image: 'https://tsneh.vercel.app/94gttrvxkuwf', link: 'https://segment.yuppcdn.net/050522/murasu/playlist.m3u8' },
  { name: 'Chithiram', image: 'https://d229kpbsb5jevy.cloudfront.net/tv/150/150/bnw/chithiram-tv-white.png', link: 'https://g5nl63palpq6-hls-live.5centscdn.com/blacksheep/d0dbe915091d400bd8ee7f27f0791303.sdp/playlist.m3u8' },
  { name: 'SUN News', image: 'https://seeklogo.com/images/S/sun-news-logo-107E32491A-seeklogo.com.png', link: 'https://mannanplay-yt-live.mayilgamingmd.workers.dev/stream/UCYlh4lH762HvHt6mmiecyWQ/master.m3u8' },
  { name: 'K Seithigal', image: 'https://media.assettype.com/kalaignarseithigal/2019-04/273604e9-3c45-44a4-9866-9584c01fddbd/NEWS_01.png?w=1200&auto=format%2Ccompress&ogImage=true', link: 'https://mannanplay-yt-live.mayilgamingmd.workers.dev/stream/UCcVF2Fth-qEA4T1Lhn3CgKg/master.m3u8' },
  { name: 'Pithiyathalaimurai', image: 'https://gumlet.assettype.com/puthiyathalaimurai/2023-03/8b38e0a5-3ce7-4d9a-9768-0be50a980f42/16_9.png?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true', link: 'https://segment.yuppcdn.net/240122/puthiya/playlist.m3u8' },
  { name: 'News 7', image: 'https://aiadmk.com/wp-content/uploads/2024/02/Newsj_Logo.png', link: 'https://mannanplay-yt-live.mayilgamingmd.workers.dev/stream/UCtbo6_eDG7zEtaOtcSltJkA/master.m3u8' },
  { name: 'Polimer News', image: 'https://lh3.googleusercontent.com/joei-DC1Rb7-Ltp_fcdH_FGqL2LIcLf_APsaeFULWFjJ-UTF4L7UZ2LHT6FywBP2v9o=w300', link: 'https://segment.yuppcdn.net/110322/polimernews/playlist.m3u8' },
  { name: 'News 18', image: 'https://seeklogo.com/images/N/news-18-tamilnadu-logo-24724F38DD-seeklogo.com.png', link: 'https://nw18live.cdn.jio.com/bpk-tv/News18_Tamil_Nadu_NW18_MOB/output01/master.m3u8' },
  { name: 'Thanthi', image: 'https://i.pinimg.com/originals/e7/67/5a/e7675a5209137e5cc027693fd037e67a.png', link: 'https://segment.yuppcdn.net/110322/thanthi/playlist.m3u8' },
  { name: 'Rasi Hollywood', image: 'https://tse4.mm.bing.net/th?id=OIP.T3ZCC2aWZPwdJE7euzwyqAHaF4&pid=Api&P=0&h=220', link: 'https://tinyurl.com/5n8xzuvh' },
  { name: 'Rasi Classic', image: 'https://tse4.mm.bing.net/th?id=OIP.T3ZCC2aWZPwdJE7euzwyqAHaF4&pid=Api&P=0&h=220', link: 'https://tinyurl.com/ry8pt892' },
  { name: 'Rasi Tamil', image: 'https://tse4.mm.bing.net/th?id=OIP.T3ZCC2aWZPwdJE7euzwyqAHaF4&pid=Api&P=0&h=220', link: 'https://tinyurl.com/yuh77m4p' },
  { name: 'Rasi Cinema', image: 'https://tse4.mm.bing.net/th?id=OIP.T3ZCC2aWZPwdJE7euzwyqAHaF4&pid=Api&P=0&h=220', link: 'https://tinyurl.com/59hj6atw' },
  { name: 'History', image: 'https://searchvectorlogo.com/wp-content/uploads/2020/04/history-tv18-logo-vector.png', link: 'https://tinyurl.com/4uvwdtm8' },

    // { name: '', image: '', link: '' },
    // { name: '', image: '', link: '' },

    // { name: '', image: '', link: '' },
    // { name: '', image: '', link: '' },
    // { name: '', image: '', link: '' },
    // { name: '', image: '', link: '' },
    // { name: '', image: '', link: '' },
    // { name: '', image: '', link: '' },
    // { name: '', image: '', link: '' },
  ];
  const Livetwo = () => {
    return (
      <>
        <h1 className='sideheading'>Live TV</h1>
        <p className='vlc'>INSTALL VLC MEDIA PLAYER BEFORE USING THIS
        <a href="https://play.google.com/store/apps/details?id=org.videolan.vlc" target="_blank" rel="noopener noreferrer" className='vlc2'>Click here
        </a>
        </p>
        <div className='play'>
          {channels.map((channel, index) => (
            <div key={index} className='son'>
              <a href={`vlc://${channel.link}`} target="_blank" rel="noopener noreferrer">
                <img src={channel.image} alt={channel.name} />
              </a>
              <p>{channel.name}</p>
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default Livetwo;
