import React, { useEffect, useState, useRef } from 'react';
const stream = [
  
  //https://stream.vstartv.org:3511/hybrid/play.m3u8
  //https://live.tamiltool.online/livestream-source.m3u8
  //https://tsneh.vercel.app/rzirhnk8vi4q
  //https://glb.bozztv.com/glb/ssh101/tultrabbtamil/index.m3u8

  
  
  { name: 'BB 24*7', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvdIFaCYAcm_7BPwVQWaW6TKxbpvkTMvWswImFgaTwacr7G87XesElbHH&s=10', link: 'https://tsneh.vercel.app/6esr_4mxpaxe' },
  //{ name:'Pkl',image:'https://upload.wikimedia.org/wikipedia/commons/2/2b/919-9198627_the-league-will-continue-its-existing-format-and.png',link:'https://tinyurl.com/57btpw94'},
  //{ name: '2nd T20', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv_ADaI_RiY29m-Uz4m3ayR7MPnUc2DVUKrg&usqp=CAU', link: 'https://amitb3669.github.io/allinonereborn/tnt1.html' },
  //{name:"2nd ODI",image:"https://cricketvectors.akamaized.net/Series/1NL.png?impolicy=default_web",link:"https://dai.google.com/ssai/event/7044GU7mRL2-99W6nrnbzA/master.m3u8"},

 // {name:'WBBL',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk4x14C1uhxIej-KBuFWv9IeAdnh0vdSaUPfyvMaUq2enqbR1a4kgIe4c-&s=10',link:'https://tinyurl.com/2c5ehdac'},
//{ name:'TN vs DEL',image:'https://upload.wikimedia.org/wikipedia/en/2/23/Ranji_Trophy_logo.png',link:'https://prod-sports-eng-gm.jiocinema.com/hls/live/2100306/hd_akamai_merged_avc_eng_cricket_m1_201024/mobile_master.m3u8'},
// { name:'SAU vs CHH',image:'https://upload.wikimedia.org/wikipedia/en/2/23/Ranji_Trophy_logo.png',link:'https://prod-sports-eng-gm.jiocinema.com/hls/live/2100306/hd_akamai_merged_avc_eng_cricket_m3_201024/mobile_master.m3u8'},
//{ name:'HP vs RAJ',image:'https://upload.wikimedia.org/wikipedia/en/2/23/Ranji_Trophy_logo.png',link:'https://prod-sports-eng-gm.jiocinema.com/hls/live/2100306/hd_akamai_merged_avc_eng_cricket_m2_201024/mobile_master.m3u8'},
  //{name: 'Odisha VS Mohun Bagan', image: 'https://www.indiansuperleague.com/static-assets/images/default-social-share.jpg', link: 'https://live.drmlive-02.workers.dev/jc/122.m3u8' },
//demo
 //{name: 'Odisha VS Mohun Bagan', image: 'https://www.indiansuperleague.com/static-assets/images/default-social-share.jpg', link: 'https://prod-sports-eng-gm.jiocinema.com/hls/live/2112600/hd_akamai_merged_avc_isl_eng_m1101124/master_p2.m3u8' },


  //{name:'3rd ODI',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv_ADaI_RiY29m-Uz4m3ayR7MPnUc2DVUKrg&usqp=CAU',link:'http://195.90.209.41:7575/channel/n49361d2/index.m3u8?q=1731142068821'},

];
const movies = [
    { name:'Kanguva',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwqsHIIojmSJFVRY9gQlbY6NaQDNaUsu-b90mfCkI0PJHxf5nJzCJ-m0&s=10',link:'https://tinyurl.com/2yku43my'},
 { name:'Amaran',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzugiP-FGYgjDvKH0orm9a3csrkqljfNSwqVBS9yIeVA3_2EUNNAizHBMD&s=10',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Amaran.mp4'},
    { name:'Bloody Beggar',image:'https://upload.wikimedia.org/wikipedia/en/4/40/Bloody_Beggar.jpg',link:'https://tsneh.vercel.app/kfrxqimib1ax'},
    { name:'Brother',image:'https://timesofindia.indiatimes.com/photo/103798855.cms',link:'https://tinyurl.com/u4h76nvj'},
    { name:'Black',image:'https://upload.wikimedia.org/wikipedia/en/3/3a/Black_%282024_film%29.jpg',link:"https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Black.mp4"},
    { name:"Vettaiyan",image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULrTu7hLs5ggDAet-gSB2-ujfUA4nqb1U40cpUO0qihy1Cliz4HufKAHM&s=10',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Vettaiyan.mp4'},
    { name: 'Meiyazhagan', image: 'https://i.scdn.co/image/ab67616d0000b2737e86df2b3a35c59564738524', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Meiyazhagan.mp4' },  
    { name: 'Goat', image: 'https://images.news18.com/ibnlive/uploads/2024/06/fotojet-2024-06-22t145736.232-2024-06-713c0097066abbd6ee404f96ef27a872.jpg?impolicy=website', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Goat.mp4' },
    { name: 'Raayan', image: 'https://multicinema.in/assets1/2021MoviesPoster/Raayan.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Raayan.mp4' },
    { name: 'Vaazhai', image: 'https://img1.imageride.net/images/2024/08/24/GNfbjytfJh4TYJb.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Vaazhai.mp4' },
    { name: 'Thangalan', image: 'https://multicinema.in/assets1/2021MoviesPoster/Thangalaan.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Ayalaan.mp4' },
    { name: 'Hi Nanna', image: 'https://tinyurl.com/ye76f2r4', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Hi_Nanna.mp4' },
    { name: 'Premalu', image: 'https://tinyurl.com/yn5t9a9p', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Premalu.mp4' },

];
const others = [
  { name: 'Songs', image: 'https://raw.githubusercontent.com/vijesh0512/image/refs/heads/main/DALL%C2%B7E%202024-09-21%2012.26.50%20-%20A%20close-up%20of%20a%20black%20and%20white%20pitbull%20dog%20wearing%20a%20gold%20chain.%20The%20dog%20is%20sitting%20indoors%20and%20smiling%20with%20its%20tongue%20slightly%20out.%20The%20white%20fur%20o.webp', link: 'Albums' },
  { name: 'Shows', image: 'https://raw.githubusercontent.com/vijesh0512/image/refs/heads/main/DALL%C2%B7E%202024-09-21%2012.38.22%20-%20A%20close-up%20of%20a%20black%20and%20white%20pitbull%20dog%20wearing%20a%20gold%20chain%2C%20sitting%20on%20a%20cozy%20couch%20in%20a%20modern%20living%20room.%20The%20dog%20is%20watching%20TV%2C%20with%20a%20colo.webp', link: 'Shows' },
  { name: 'Kids', image: 'https://github.com/vijesh0512/image/blob/main/e9cf8cc9-062e-4f62-8186-777aa9db4e6a_2.jpeg?raw=true', link: 'Kids' },
  { name: 'Series', image: 'https://github.com/vijesh0512/image/blob/main/67dfdc92-1649-4b36-8656-a408f747b91e_3.jpeg?raw=true', link: 'Series' },
  { name: 'Video Songs', image: 'https://raw.githubusercontent.com/vijesh0512/image/refs/heads/main/DALL%C2%B7E%202024-09-28%2020.05.16%20-%20A%20black%20and%20white%20pitbull%20dog%20wearing%20a%20gold%20chain%20and%20headphones%2C%20sitting%20in%20a%20dimly%20lit%20movie%20theater%2C%20facing%20the%20large%20screen%20playing%20a%20video%20song.webp', link: 'Vid' },
];
const channels = [
  { name: 'SS Tamil', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQop8ucdt1JVIfgEzRt4K8A6AoRZ-DfftdXvSBfE2Pm8IBKBfA9Jwo61Es4&s=10',link:'https://tinyurl.com/5n82rrc9'},
  { name: 'Vijay Super', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQjonzzKzBGJJKpe1_FrbiyAwiMGAEGftloixlGuyIqiS6rRIkFTDArP4&s=10', link: 'https://tinyurl.com/ycxhrjsm' },
  { name: 'Star Vijay', image: 'https://tinyurl.com/2heavac5', link: 'https://tinyurl.com/yhcynpch'},
  { name: 'Sun TV', image: 'https://tinyurl.com/55rjk5ka', link: 'https://tinyurl.com/2e9ak5ds'},
  { name: 'K TV', image: 'https://seeklogo.com/images/K/ktv-logo-703754480A-seeklogo.com.png', link: 'https://tinyurl.com/yrzdjydy'},
  { name: 'Sun Music', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Sun_Music_%28No_Background%29.png', link: 'https://tinyurl.com/2s8c6ak2' },
  { name: 'Zee Tamil', image: 'https://www.ethnicchannels.com/images/channeldetail/zee-tamil/ZEE-TAMIL.png', link: 'https://tinyurl.com/42xpvj8y' },
  { name: 'Zee Thirai', image: 'https://vignette.wikia.nocookie.net/logopedia/images/c/c3/Zee_Thirai.png/revision/latest?cb=20200324034033', link: 'https://tinyurl.com/383n8rn5' },
  { name: 'Colors Tamil', image: 'https://tinyurl.com/yc2kz4ck', link: 'https://tinyurl.com/4yheza4w' },
  { name: 'Adithya',image:'https://jiotvimages.cdn.jio.com/dare_images/images/Adithya_TV.png',link:'https://tinyurl.com/4weykd2v'},
  { name: 'Kalaignar TV', image: 'https://tsneh.vercel.app/fzqicp5wkped', link: 'https://segment.yuppcdn.net/240122/kalaignartv/playlist.m3u8' },
  { name: 'Siripoli', image: 'https://tsneh.vercel.app/bril2azbth2y', link: 'https://segment.yuppcdn.net/240122/siripoli/playlist.m3u8' },
  
];
// const video=[
//     // { name: 'Latest', image: 'https://tse1.mm.bing.net/th?id=OIP.DV5kBw14-70B990kJ09frgHaEK&pid=Api&P=0&h=220', link: 'https://allinonereborn.in/spice11.m3u8/?id=9269' },
//     // { name: 'Classical', image: 'https://tse1.mm.bing.net/th?id=OIP.DV5kBw14-70B990kJ09frgHaEK&pid=Api&P=0&h=220', link: 'https://allinonereborn.in/spice11.m3u8/?id=9270' },
//     // { name: 'Melody', image: 'https://tse1.mm.bing.net/th?id=OIP.DV5kBw14-70B990kJ09frgHaEK&pid=Api&P=0&h=220', link: 'https://allinonereborn.in/spice11.m3u8/?id=9271' },
//     // { name: 'Romantic', image: 'https://tse1.mm.bing.net/th?id=OIP.DV5kBw14-70B990kJ09frgHaEK&pid=Api&P=0&h=220', link: 'https://allinonereborn.in/spice11.m3u8/?id=9272' },
//     { name: 'Tamil', image: 'https://tse1.mm.bing.net/th?id=OIP.DV5kBw14-70B990kJ09frgHaEK&pid=Api&P=0&h=220', link: 'https://allinonereborn.com/tatatv.php?id=60115'},
// ]
const games=[
  {name:"Tic Tac Toe",image:"https://s3-alpha.figma.com/hub/file/479379372/7e6df39f-585d-4a9e-9bf3-4ef4c00f816b-cover.png",link:"https://vijesh-x-o.netlify.app/"},
  {name:"2048",image:"https://www.coolmathgames.com/sites/default/files/2048_OG-logo.jpg",link:"https://vijesh2048.netlify.app/"},
    {name:"Mmemory",image:"https://tcgtoys.com/cdn/shop/products/13410_LittleTikes_MatchingMemoryGame_LIFE_lr_2048x.jpg?v=1643941358",link:"https://vijesh-memory.netlify.app/"},
  {name:"Whack",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4I87IpLI8e_sKFuCk5XqyszNeDZfdUBADoA&usqp=CAU",link:"https://whack-me.netlify.app/"},
  {name:"Crossy road",image:"https://m.media-amazon.com/images/I/71zaNBSsjRL._SL500_.png",link:"https://vijesh-cross.netlify.app/"},
  
  ];
const hero = [
    {
        name: "Ajith Hits",
        image: "https://2.bp.blogspot.com/-dByyWXSXSmc/W0226IABdvI/AAAAAAAAFiQ/P7lUEEUV2b0tdf2MC5_vJGJ41ZOnnmk_ACLcBGAs/s1600/ajith-kumar-thala-hd-photos-stylish-hd-3.jpg",
        audio: "https://stream.zeno.fm/qfkksd31w0hvv"
    },
    {
        name: "Vijay Hits",
        image: "https://tse3.mm.bing.net/th?id=OIP.zJFA3xA5mT_0X2TYQNGbswHaJ4&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/2pn99a71w0hvv"
    },
    {
        name: "Kamal Hits",
        image: "https://tse3.mm.bing.net/th?id=OIP.H7SUhF_GaM0cCkF3wzj6bwHaEK&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/ya6emvmcbkhvv"
    },
    {
        name: "Rajini Hits",
        image: "https://i2.cinestaan.com/image-bank/1500-1500/124001-125000/124001.jpg",
        audio: "https://stream.zeno.fm/vcn3hvqpad0uv"
    },
    {
        name: "Suriya Hits",
        image: "https://filmfare.wwmindia.com/content/2020/oct/suriya21603690823.jpg",
        audio: "https://stream.zeno.fm/rzf5mbq3b48uv"
    },
    {
        name: "Dhanush Hits",
        image: "https://m.media-amazon.com/images/M/MV5BMTc5YjZlZjEtYzM1MC00ZmIwLWE0MzItNDcwOGYxYTJlMWNmXkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_FMjpg_UX1000_.jpg",
        audio: "https://stream.zeno.fm/aqp97f3z238uv"
    },
    {
        name: "Simbhu Hits",
        image: "https://images.tv9telugu.com/wp-content/uploads/2023/03/simbu-7.jpg",
        audio: "https://stream.zeno.fm/8kgd85rx338uv"
    },
];
const md = [
    {
        name: "Anirudh Hits",
        image: "https://tse3.mm.bing.net/th?id=OIP.i5sECoDT9WGDoH4jha0ZsAHaJT&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/qdvuf5e4138uv"
    },
    {
        name: "Yuvan Hits",
        image: "https://tse1.mm.bing.net/th?id=OIP.F1rDiRaqAbH6Z46HEOufFgHaFj&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/f939szg6a48uv"
    },
    {
        name: "Vidhyasagar Hits",
        image: "https://tse3.mm.bing.net/th?id=OIP.mWdGy1U8fPpcn1E_uCVaZwAAAA&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/bb2vs3yaa48uv"
    },
    {
        name: "AR Rahman Hits",
        image: "https://tse4.mm.bing.net/th?id=OIP.dqdTVZubHJ18FeNAneManAHaE0&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/8vs416z3b48uv"
    },
    {
        name: "Ilayaraja Hits",
        image: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/03/13/Pictures/concert-maestro-ilayaraja-enthralled-music-lovers-first_49150ca4-2677-11e8-9f95-06a811d7e716.jpg",
        audio: "https://stream.zeno.fm/5u2c0yh0ekhvv"
    },
    {
        name: "Harris Hits",
        image: "https://tse2.mm.bing.net/th?id=OIP.Lo_UedSrMA7sZppCeHxR6AHaJF&pid=Api&P=0&h=220",
        audio: "http://154.38.171.207:8240/harris_jayaraj_R"
    },
    {
        name: "Imman Hits",
        image: "https://tse2.mm.bing.net/th?id=OIP.P6PIBIx1aL8KZyCwRLWjSAHaEJ&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/1zsd11zaa48uv"
    },
    {
        name: "Deva Hits",
        image: "https://media.maalaimalar.com/h-upload/2022/11/21/1794994-i.jpg",
        audio: "https://stream.zeno.fm/6cxuhfmcbkhvv"
    },
    {
        name: "Santhosh Narayanan Hits",
        image: "https://s01.sgp1.cdn.digitaloceanspaces.com/article/160519-cwovbgpzsk-1624038114.jpeg",
        audio: "https://stream.zeno.fm/wkqvzsg1238uv"
    },
];
const singer = [
    {
        name: "SPB Hits",
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/01/25/952625-sp-balasubrahmanyam.jpg",
        audio: "https://stream.zeno.fm/ey44ycfscuhvv"
    },
    {
        name: "Yesudas hits",
        image: "https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2014/10/02/Incoming/Pictures/1271098_Wallpaper2.jpg?",
        audio: "https://stream.zeno.fm/avt4e9yaa48uv"
    },
    {
        name: "Mano Hits",
        image: "https://tse3.mm.bing.net/th?id=OIP.ytp7aVTJuW0roc6BZYDvnwHaEc&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/we99zw61w0hvv"
    },
    {
        name: "Shankar Mahadevan",
        image: "https://rollingstoneindia.com/wp-content/uploads/2022/04/Shankar-Mahadevan-MCMM-JioSaavn-scaled.jpg",
        audio: "https://stream.zeno.fm/wpzkyefcbkhvv"
    },
    {
        name: "Hariharan",
        image: "https://tse4.mm.bing.net/th?id=OIP.efwEpa4tQ3PvlzO9xiJSDQHaFY&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/gu69vryaa48uv"
    },
    {
        name: "Sid Sriram",
        image: "https://tse2.mm.bing.net/th?id=OIP.f-muscf-ZcIBSxds-Y44nAHaFm&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/5vxa8zyaa48uv"
    },
    {
        name: "Shreya Goshal",
        image: "https://tse4.mm.bing.net/th?id=OIP.6ezYAUo-GxybZn_acBNpjgHaEK&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/czvuphmcbkhvv"
    },
    {
        name: "Janaki hits",
        image: "https://static.india.com/wp-content/uploads/2020/06/s-janaki-dead-death-hoax-main.jpg",
        audio: "https://stream.zeno.fm/ewdn3pfcbkhvv"
    },
    {
        name: "Chitra Hits",
        image: "https://th-i.thgim.com/public/entertainment/music/ypb6hv/article35011959.ece/alternates/LANDSCAPE_1200/chitra5",
        audio: "https://stream.zeno.fm/h9vqwpmcbkhvv"
    }
    
];
const Years = [
    {
        name: "70's Hits",
        image: "https://tse3.mm.bing.net/th?id=OIP.xCCW1hSHuGidqt6Ja_IOdQAAAA&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/694a2ab4138uv"
    },
    {
        name: "80's Hits",
        image: "https://tse2.mm.bing.net/th?id=OIP.7SyxHBp3BMQJm6nSUIocngHaHa&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/apzh64fgdq8uv"
    },
    {
        name: "90's Hits 1",
        image: "https://tse4.mm.bing.net/th?id=OIP.tMgAeL7lZkFgDcTusvDRDwHaHa&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/wmg76d4zc48uv"
    },
    {
        name: "90's Hits 2",
        image: "https://tse4.mm.bing.net/th?id=OIP.tMgAeL7lZkFgDcTusvDRDwHaHa&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/ss2u9f27a48uv"
    },
    {
        name: "2k Hits",
        image: "https://1000logos.net/wp-content/uploads/2022/01/2K-Logo-2005.png",
        audio: "https://stream.zeno.fm/v0bu4uc1c48uv"
    },
    {
        name: "Gaana Hits",
        image: "https://logodix.com/logo/661734.jpg",
        audio: "https://tinyurl.com/bdfkf7bs"
    },
];
const Heros = ({ onNavClick,onSongChange, onAudioChange }) => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [,setCurrentAudio] = useState(null);
  const audioRef = useRef(null);

  const handlePlay = async (song) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const newAudio = new Audio(song.audio);
    audioRef.current = newAudio;
    setCurrentAudio(newAudio); // Update current audio state
    onAudioChange(newAudio); // Notify parent component about the audio change

    try {
      await newAudio.play();
      onSongChange(song);
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };
  const renderSongs = (songsArray, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    songsArray.forEach(song => {
      const songDiv = document.createElement('div');
      songDiv.classList.add('song');
      songDiv.innerHTML = `
        <image src="${song.image}" alt="${song.name}">
        <p>${song.name}</p>
      `;
      songDiv.onclick = () => handlePlay(song);
      container.appendChild(songDiv);
    });
  };
  const rendermov = (songsArray, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;
  
    container.innerHTML = '';
  
    songsArray.forEach(song => {
      const songDiv = document.createElement('div');
      songDiv.classList.add('song');
      songDiv.innerHTML = `
        <a href="${song.link}" target="_blank">
          <image src="${song.image}" alt="${song.name}">
        </a>
        <p>${song.name}</p>
      `;
      songDiv.onclick = () => handlePlay(song);
      container.appendChild(songDiv);
    });
  };
  const renderdog = (songsArray, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    songsArray.forEach(song => {
      const songDiv = document.createElement('div');
      songDiv.classList.add('song');
      songDiv.innerHTML = `
        <image src="${song.image}" alt="${song.name}">
        <p>${song.name}</p>
      `;
      songDiv.onclick = () => onNavClick(song.link);
      container.appendChild(songDiv);
    });
  };
  const renderchannel = (songsArray, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;
  
    container.innerHTML = '';
  
    songsArray.forEach(song => {
      const songDiv = document.createElement('div');
      songDiv.classList.add('song');
      songDiv.innerHTML = `
        <a href="vlc://${song.link}" target="_blank">
          <img src="${song.image}" alt="${song.name}">
        </a>
        <p>${song.name}</p>
      `;
      songDiv.onclick = () => handlePlay(song);
      container.appendChild(songDiv);
    });
  };
  useEffect(() => {
    if (!selectedAlbum) {
      // rendermov(video, 'video-player');
      renderSongs(hero, 'hero-player');
      renderSongs(md, 'md-player');
      renderSongs(singer, 'singer-player');
      renderSongs(Years, 'others-player');
      rendermov(movies, 'movie-player');
      rendermov(games, 'game-player');
      rendermov(stream, 'stream-player');
      //rendermov(channels,'live-player');
      //renderchannel(channels, 'live-player');
      renderdog(others, 'dog-player');
    }
  },);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {selectedAlbum ? (
        <div>
          <h1 className='sideheading'>{selectedAlbum.name} Songs</h1>
          <div className='player'>
            {selectedAlbum.songs.map(song => (
              <div key={song.name} className='song' onClick={() => handlePlay(song)}>
                <img src={song.image} alt={song.name} />
                <p>{song.name}</p>
              </div>
            ))}
          </div>
          <button className='bt' onClick={() => setSelectedAlbum(null)}>Back</button >
        </div>
      ) : (
        <>
 
           <div className="bt">
          <h1 className='sideheading'>Live Events</h1>
          </div>
        <div id='stream-player' className='player'></div>

          <div className="bt">
              <h1 className='sideheading'>Movies</h1>
              <button onClick={() => onNavClick('Movies')} className='btt'>See All</button>
          </div>
          <div id='movie-player' className='player'></div>

         <div className="bt">
          <h1 className='sideheading'>Games</h1>
          </div>
        <div id='game-player' className='player'></div>

          <div className="bt">
              <h1 className='sideheading'>Others</h1>
              {/* <button onClick={() => onNavClick('stream')} className='btt'>See All</button> */}
          </div>
          <div id='dog-player' className='player'></div>
          {/* <div className="bt">
              <h1 className='sideheading'>Live Tv</h1>
            <button onClick={() => onNavClick('vlc')} className='btt'>See All</button>
          </div>
          <div id='live-player' className='player'></div>*/}

          {/* <h1 className='sideheading'>Video Songs</h1>
          <div id='video-player' className='player'></div> */}
          <h1 className='sideheading'>Heros (Radio)</h1>
          <div id='hero-player' className='player'></div>
          <h1 className='sideheading'>Music Directors (Radio)</h1>
          <div id='md-player' className='player'></div>
          <h1 className='sideheading'>Singers (Radio)</h1>
          <div id='singer-player' className='player'></div>
          <h1 className='sideheading'>Others(Radio)</h1>
          <div id='others-player' className='player'></div>

        </>
      )}
    </>
  );
};

export default Heros;