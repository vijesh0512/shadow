
import './live.css';

const channels = [
  //{ name: 'Vijay Takkar', image: 'https://news.indiantvinfo.com/media/2022/09/Logo-of-Vijay-Takkar-Channel-300x300.png', link: 'https://stream.vstartv.org:3511/hybrid/play.m3u8' },
// { name: 'SS Tamil', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQop8ucdt1JVIfgEzRt4K8A6AoRZ-DfftdXvSBfE2Pm8IBKBfA9Jwo61Es4&s=10',link:'albaniaserver.com/play/live.php?mac=00:1A:79:5C:C1:11&stream=441095&extension=ts&play_token=zr3DwTDkQA'},
  //{ name: 'Vijay Super', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQjonzzKzBGJJKpe1_FrbiyAwiMGAEGftloixlGuyIqiS6rRIkFTDArP4&s=10', link: 'https://tinyurl.com/yc3mav2k' },
  { name: 'Star Vijay', image: 'https://tinyurl.com/2heavac5', link: 'https://allinonereborn.com/tatatv.php?id=924'},
  { name: 'Sun TV', image: 'https://tinyurl.com/55rjk5ka', link: 'https://allinonereborn.com/tatatv.php?id=11806'},
  { name: 'K TV', image: 'https://seeklogo.com/images/K/ktv-logo-703754480A-seeklogo.com.png', link: 'https://allinonereborn.com/tatatv.php?id=11818'},
  { name: 'Zee Tamil', image: 'https://www.ethnicchannels.com/images/channeldetail/zee-tamil/ZEE-TAMIL.png', link: 'https://allinonereborn.com/tatatv.php?id=11807' },
  {name:'Zee Thirai',image:'https://vignette.wikia.nocookie.net/logopedia/images/c/c3/Zee_Thirai.png/revision/latest?cb=20200324034033',link:'https://allinonereborn.com/tatatv.php?id=11756'},
  { name: 'Sun Music', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Sun_Music_%28No_Background%29.png', link: 'https://allinonereborn.com/tatatv.php?id=652' },
   { name: 'Colors Tamil', image: 'https://tinyurl.com/yc2kz4ck', link: 'https://allinonereborn.com/tatatv.php?id=742' },
  //{ name: 'Thanthi One', image: 'https://pbs.twimg.com/profile_images/1782026072185339904/r41WPxGJ_400x400.jpg', link: 'https://allinonereborn.com/tatatv.php?id=12148' },
  { name: 'Kalaignar TV', image: 'https://tsneh.vercel.app/fzqicp5wkped', link: 'https://segment.yuppcdn.net/240122/kalaignartv/playlist.m3u8' },
  { name: 'Siripoli', image: 'https://tsneh.vercel.app/bril2azbth2y', link: 'https://segment.yuppcdn.net/240122/siripoli/playlist.m3u8' },
  { name: 'Isaiaruvi', image: 'https://tsneh.vercel.app/wjqhyyohoqcc', link: 'https://segment.yuppcdn.net/140622/isaiaruvi/playlist.m3u8' },
  { name: 'Murasu', image: 'https://tsneh.vercel.app/94gttrvxkuwf', link: 'https://segment.yuppcdn.net/050522/murasu/playlist.m3u8' },
  { name: 'Chithiram', image: 'https://d229kpbsb5jevy.cloudfront.net/tv/150/150/bnw/chithiram-tv-white.png', link: 'https://g5nl63palpq6-hls-live.5centscdn.com/blacksheep/d0dbe915091d400bd8ee7f27f0791303.sdp/playlist.m3u8' },
//  { name: 'SUN News', image: 'https://seeklogo.com/images/S/sun-news-logo-107E32491A-seeklogo.com.png', link: 'https://mannanplay-yt-live.mayilgamingmd.workers.dev/stream/UCYlh4lH762HvHt6mmiecyWQ/master.m3u8' },
//  { name: 'K Seithigal', image: 'https://media.assettype.com/kalaignarseithigal/2019-04/273604e9-3c45-44a4-9866-9584c01fddbd/NEWS_01.png?w=1200&auto=format%2Ccompress&ogImage=true', link: 'https://mannanplay-yt-live.mayilgamingmd.workers.dev/stream/UCcVF2Fth-qEA4T1Lhn3CgKg/master.m3u8' },
  { name: 'Pithiyathalaimurai', image: 'https://gumlet.assettype.com/puthiyathalaimurai/2023-03/8b38e0a5-3ce7-4d9a-9768-0be50a980f42/16_9.png?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true', link: 'https://segment.yuppcdn.net/240122/puthiya/playlist.m3u8' },
//  { name: 'News 7', image: 'https://aiadmk.com/wp-content/uploads/2024/02/Newsj_Logo.png', link: 'https://mannanplay-yt-live.mayilgamingmd.workers.dev/stream/UCtbo6_eDG7zEtaOtcSltJkA/master.m3u8' },
  { name: 'Polimer News', image: 'https://lh3.googleusercontent.com/joei-DC1Rb7-Ltp_fcdH_FGqL2LIcLf_APsaeFULWFjJ-UTF4L7UZ2LHT6FywBP2v9o=w300', link: 'https://segment.yuppcdn.net/110322/polimernews/playlist.m3u8' },
  { name: 'News 18', image: 'https://seeklogo.com/images/N/news-18-tamilnadu-logo-24724F38DD-seeklogo.com.png', link: 'https://nw18live.cdn.jio.com/bpk-tv/News18_Tamil_Nadu_NW18_MOB/output01/master.m3u8' },
  { name: 'Thanthi', image: 'https://i.pinimg.com/originals/e7/67/5a/e7675a5209137e5cc027693fd037e67a.png', link: 'https://segment.yuppcdn.net/110322/thanthi/playlist.m3u8' },
//  { name: 'Rasi Hollywood', image: 'https://tse4.mm.bing.net/th?id=OIP.T3ZCC2aWZPwdJE7euzwyqAHaF4&pid=Api&P=0&h=220', link: 'https://tinyurl.com/5n8xzuvh' },
//  { name: 'Rasi Classic', image: 'https://tse4.mm.bing.net/th?id=OIP.T3ZCC2aWZPwdJE7euzwyqAHaF4&pid=Api&P=0&h=220', link: 'https://tinyurl.com/ry8pt892' },
//  { name: 'Rasi Tamil', image: 'https://tse4.mm.bing.net/th?id=OIP.T3ZCC2aWZPwdJE7euzwyqAHaF4&pid=Api&P=0&h=220', link: 'https://tinyurl.com/yuh77m4p' },
  //{ name: 'Rasi Cinema', image: 'https://tse4.mm.bing.net/th?id=OIP.T3ZCC2aWZPwdJE7euzwyqAHaF4&pid=Api&P=0&h=220', link: 'https://tinyurl.com/59hj6atw' },
  //{ name: 'History', image: 'https://searchvectorlogo.com/wp-content/uploads/2020/04/history-tv18-logo-vector.png', link: 'https://tinyurl.com/4uvwdtm8' },

    { name: 'Jaya TV', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLbE5_4NKtis11wQ9PIMzGFlRWmZe6B0lMQ&s', link: 'https://allinonereborn.com/tatatv.php?id=767' },
    { name: 'Raj TV', image: 'https://indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/mam-images/2014/09/24/ik.jpg?itok=f7Nk4kCj', link: 'https://allinonereborn.com/tatatv.php?id=1148' },
    { name: 'Raj Digital Plus', image: 'https://tvschedule.today/_next/image?url=https%3A%2F%2Fjiotvimages.cdn.jio.com%2Fdare_images%2Fimages%2F200%2F-%2FRaj_Digital_Plus.png&w=128&q=75', link: 'https://allinonereborn.com/tatatv.php?id=1009' },
    { name: 'Jaya Movies', image: 'https://jiotvimages.cdn.jio.com/dare_images/images/J_Movies.png', link: 'https://allinonereborn.com/tatatv.php?id=11793' },
    
  
     { name: 'DD SPORTS', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-941-j5mhk5fc-v1/imageContent-941-j5mhk5fc-m1.png', link: 'https://allinonereborn.com/tatatv.php?id=12171' },
    { name: 'Star Sports 1 HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-8301-j7hc0820-v1/imageContent-8301-j7hc0820-m1.png', link: 'https://allinonereborn.com/tatatv.php?id=12148' },
    { name: 'Star Sports 2 HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-1021-j5nj3c68-v1/imageContent-1021-j5nj3c68-m1.png', link: 'https://allinonereborn.com/tatatv.php?id=12150' },
    { name: 'Star Sports Select 1 HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-7891-j75vq7k0-v1/imageContent-7891-j75vq7k0-m1.PNG', link: 'https://allinonereborn.com/tatatv.php?id=12151' },
      { name: 'Star Sports Select 2 HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11791-j9kyqpy8-v1/imageContent-11791-j9kyqpy8-m1.png', link: 'https://allinonereborn.com/tatatv.php?id=12152' },
      { name: 'SONY SPORTS TEN 1 HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-261-j5fz9bvk-v4/imageContent-261-j5fz9bvk-m4.png', link: 'https://allinonereborn.com/tatatv.php?id=12145' },
      { name: 'SONY SPORTS TEN 2 HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11784-j9kylfd4-v2/imageContent-11784-j9kylfd4-m3.png', link: 'https://allinonereborn.com/tatatv.php?id=12146' },
      { name: 'SONY SPORTS TEN 3 HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11787-j9kynnm0-v3/imageContent-11787-j9kynnm0-m3.png', link: 'https://allinonereborn.com/tatatv.php?id=12147' },
      { name: 'SONY SPORTS TEN 5 HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-108-j5fl5wwg-v3/imageContent-108-j5fl5wwg-m3.png', link: 'https://allinonereborn.com/tatatv.php?id=12144' },
     // { name: 'Sports 18 1 HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-74232-la6z41u8-v3/imageContent-74232-la6z41u8-m5.png', link: 'https://allinonereborn.com/tatatv.php?id=12144' },
      { name: 'Eurosport HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-52842-k980h8vc-v1/imageContent-52842-k980h8vc-m2.png', link: 'https://allinonereborn.com/tatatv.php?id=12143' },

      { name: 'Movies Now HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12095-j9ooixfs-v1/imageContent-12095-j9ooixfs-m1.png', link: 'https://allinonereborn.com/tatatv.php?id=17017' },
      { name: 'MN+ HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12095-j9ooixfs-v1/imageContent-12095-j9ooixfs-m1.png', link: 'https://allinonereborn.com/tatatv.php?id=17032' },
      //{ name: 'MNX HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12216-j9qm5hjs-v2/imageContent-12216-j9qm5hjs-m2.png', link: 'https://allinonereborn.com/tatatv.php?id=12148' },
      { name: 'Romedy Now', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-751-j5l5kb9k-v3/imageContent-751-j5l5kb9k-m3.png', link: 'https://allinonereborn.com/tatatv.php?id=17098' },
  {name:'Star movies',image:'https://pluspng.com/img-png/star-movies-png-file-star-movies-logo-svg-1280.png',link:"https://allinonereborn.com/tatatv.php?id=17089"},
  {name:"Star movies select",image:'https://vignette.wikia.nocookie.net/logopedia/images/c/c5/SMSHD.png/revision/latest?cb=20190810162735',link:'https://allinonereborn.com/tatatv.php?id=17092'},
      { name: 'National Geographic HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12234-j9qoqc54-v1/imageContent-12234-j9qoqc54-m1.png', link: 'https://allinonereborn.com/tatatv.php?id=44357' },
      { name: 'Nat Geo Wild HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11631-j9k0ndjc-v1/imageContent-11631-j9k0ndjc-m1.png', link: 'https://allinonereborn.com/tatatv.php?id=743' },
      { name: 'Discovery HD World', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11396-j9jq7jg0-v1/imageContent-11396-j9jq7jg0-m1.png', link: 'https://allinonereborn.com/tatatv.php?id=625' },
      { name: 'Animal Planet HD World', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-44915-jzuyh3w0-v1/imageContent-44915-jzuyh3w0-m1.png', link: 'https://allinonereborn.com/tatatv.php?id=11786' },
      { name: 'History TV18 HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12267-j9qx2si0-v3/imageContent-12267-j9qx2si0-m3.png', link: 'https://allinonereborn.com/tatatv.php?id=766' },
      { name: 'Sony BBC Earth', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-551-j5ky7ufk-v5/imageContent-551-j5ky7ufk-m7.png', link: 'https://allinonereborn.com/tatatv.php?id=11801' },
      // { name: '', image: '', link: '' },

  {name:'Music',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_A3T73MFVf3S_8HpZXx_eHZjYQi2HmrlQI_NuWIg1z_hyIt1sheZCm6S&s=10',link:'https://allinonereborn.com/tatatv.php?id=60115'},
  
  
  ];
  const Livetwo = () => {
    return (
      <>
        <h1 className='sideheading'>Live TV</h1>
{/*        <p className='vlc'>INSTALL VLC MEDIA PLAYER BEFORE USING THIS
        <a href="https://play.google.com/store/apps/details?id=org.videolan.vlc" target="_blank" rel="noopener noreferrer" className='vlc2'>Click here 
        </a> 
        </p> */}
        <div className='play'>
          {channels.map((channel, index) => (
         <div key={index} className="son">
<a
  href={channel.link}
  target="_blank"
  rel="noopener noreferrer"
>
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
