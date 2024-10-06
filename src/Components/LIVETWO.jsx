
import './live.css';

const channels = [
  { name: 'Vijay Takkar', image: 'https://news.indiantvinfo.com/media/2022/09/Logo-of-Vijay-Takkar-Channel-300x300.png', link: 'https://stream.vstartv.org:3511/hybrid/play.m3u8' },
  { name: 'Vijay Super', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQjonzzKzBGJJKpe1_FrbiyAwiMGAEGftloixlGuyIqiS6rRIkFTDArP4&s=10', link: 'https://tinyurl.com/yc3mav2k' },
  { name: 'Star Vijay', image: 'https://tinyurl.com/2heavac5', link: 'https://tinyurl.com/ycxsyc5f'},
  { name: 'Sun TV', image: 'https://tinyurl.com/55rjk5ka', link: 'https://tinyurl.com/3upjsfn8'},
  { name: 'K TV', image: 'https://seeklogo.com/images/K/ktv-logo-703754480A-seeklogo.com.png', link: 'https://tsneh.vercel.app/fh2qaalwcsga'},
  { name: 'Sun Music', image: 'https://www.sundirect.in/Content/Uploads/Blocks/636928288240842877_sun-music-hd.png', link: 'https://tsneh.vercel.app/hexa8dvnu9xs' },
  { name: 'Zee Tamil', image: 'https://www.ethnicchannels.com/images/channeldetail/zee-tamil/ZEE-TAMIL.png', link: 'https://tinyurl.com/yc5zn3hs' },
  { name: 'Zee Thirai', image: 'https://vignette.wikia.nocookie.net/logopedia/images/c/c3/Zee_Thirai.png/revision/latest?cb=20200324034033', link: 'http://tv.cloudcdn.me/live.ts?channelId=78824&uid=14505&deviceMac=00:1A:79:A7:53:75' },
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

    { name: 'SSS 1HD', image: 'https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-7891-j75vq7k0-v1/imageContent-7891-j75vq7k0-m1.PNG', link: 'https://tinyurl.com/nh9rd88n' },
    { name: 'SS 1HD', image: 'https://toppng.com/uploads/preview/star-sports-hd1-star-sports-2-11563260393mf9fciusph.png', link: 'https://tinyurl.com/98ee623' },
    { name: 'SSS 2HD', image: 'https://the-media-ant.mo.cloudinary.net/medias/5989affc420c3c1917b60341/1600329108394/Star-Sports-Select-2_logo.png?tx=w_350', link: 'https://tinyurl.com/yvrdrhrt' },
    { name: 'SS 2HD', image: 'https://vignette.wikia.nocookie.net/logopedia/images/3/30/STAR_Sports_2_logo.png/revision/latest/scale-to-width-down/200?cb=20150719162835', link: 'https://tinyurl.com/ycek667n' },
    { name: 'Sony Ten 1', image: 'https://dtat2ks7dludr.cloudfront.net/spnsportsindia/channel_logos/SONY_SportsTen1_HD.png', link: 'https://tinyurl.com/bdhs5f9x' },
    {name: 'Sony Ten 2', image: 'https://dtat2ks7dludr.cloudfront.net/spnsportsindia/channel_logos/SONY_SportsTen2_HD.png', link: 'https://tinyurl.com/47sft564' },
    { name: 'Sony Ten 3', image: 'https://dtat2ks7dludr.cloudfront.net/spnsportsindia/channel_logos/SONY_SportsTen3_HD.png', link: 'https://tinyurl.com/2w5j4cdv' },
    { name: 'Sony Ten 4', image: 'https://dtat2ks7dludr.cloudfront.net/spnsportsindia/channel_logos/SONY_SportsTen4_HD.png', link: 'https://tinyurl.com/bpathszz' },
    { name: 'Sony Ten 5', image: 'https://dtat2ks7dludr.cloudfront.net/spnsportsindia/channel_logos/SONY_SportsTen5_HD.png', link: 'https://tinyurl.com/yeyw34k6' },
    { name: 'Sports 18', image: 'https://www.sports18.com/wp-content/themes/sports18/assets/images/sports18FS.png', link: 'https://tinyurl.com/n9n76sy3' },
    { name: 'Hungama', image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Hungama_TV.png', link: 'https://tinyurl.com/8unaxz6s' },
    { name: 'Disney', image: 'https://toppng.com/uploads/preview/disney-channel-struck-down-by-purple-rain-disney-channel-india-logo-115636524010en5zw5gom.png', link: 'https://tinyurl.com/3m6jzvtj' },
    { name: 'Disney Jr', image: 'https://ia800401.us.archive.org/29/items/png-transparent-disney-junior-disney-channel-the-walt-disney-company-television-/png-transparent-disney-junior-disney-channel-the-walt-disney-company-television-show-family-channel-nick-jr-television-text-logo.png', link: 'https://tinyurl.com/bdf396v2' },
    { name: 'History', image: 'https://searchvectorlogo.com/wp-content/uploads/2020/04/history-tv18-logo-vector.png', link: 'https://tinyurl.com/4uvwdtm8' },
    { name: 'Star Movies', image: 'https://content.osn.com/bob/745x419/STM.jpg', link: 'https://tinyurl.com/47v5mdd5' },
    { name: 'Star Movies Select', image: 'https://cleartv.com.np/laravel-filemanager/photos/1/HD%20chhanels/Movies/star%20movies%20select%20hd.jpg', link: 'https://tinyurl.com/mvjke3en' },
    { name: 'Sony Pix', image: 'https://origin-staticv2.sonyliv.com/videoasset_images/sony_pixhd_23oct_masthead_logo.png', link: 'https://tinyurl.com/mua5y9fa' },
    { name: '&flix', image: 'https://dreamdth.com/wp-content/uploads/2019/12/flix-logo.jpg', link: 'https://tinyurl.com/mtf54vu3' },
    { name: 'MN+', image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/5c307f28050285.55acb932126c9.png', link: 'https://tinyurl.com/2t23t29f' },
    { name: 'Movies Now', image: 'https://www.pngfind.com/pngs/m/48-484685_http-www-indigital-co-in-upload-channellogo-hd.png', link: '' },

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