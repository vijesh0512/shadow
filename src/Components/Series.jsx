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
  {name:'Beast Games',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5r5-ISr0MaPBrT8iYrOo1-5PrqWPw0E0lhZBkhYu1K4on_BwfXXVQAs&s=10',shows:[ {name:'EP 1',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBHLNAIyoNv4Y5CSPJdyNN6FUKvtxwb-F5MiT9A-zLfgddDecO-EKPih8v&s=10',link:'https://tinyurl.com/5n95tksn'},{name:'EP 2',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBHLNAIyoNv4Y5CSPJdyNN6FUKvtxwb-F5MiT9A-zLfgddDecO-EKPih8v&s=10',link:'https://tinyurl.com/c3xvwj2y'},{name:'EP 3',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBHLNAIyoNv4Y5CSPJdyNN6FUKvtxwb-F5MiT9A-zLfgddDecO-EKPih8v&s=10',link:'https://tinyurl.com/c3xvwj2y'},{name:'EP 4',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBHLNAIyoNv4Y5CSPJdyNN6FUKvtxwb-F5MiT9A-zLfgddDecO-EKPih8v&s=10',link:'https://tinyurl.com/3w2p4x7j'}, ], },
  { name:'Stranger Things S1',image:'https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FrbnuP7hlynAMLdqcQRCpZW9qDkV.jpg',shows:[ {name:'The Vanishing of Will Byers',image:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FuLES7sRpy7Ih6Kr6XCaYj1GyfTw.jpg',link:'https://tsneh.vercel.app/oetwekdm_zt0'},{name:'The Weirdo on Maple Street',image:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F8iA56ugQyHZmX81wSsNqwXjCE6F.jpg',link:'https://tsneh.vercel.app/yxtzdf1rfjvj'},{name:"Holly, Jolly",image:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F5snULpWQWp7aqFto7UbRcEkEyyS.jpg',link:"https://tsneh.vercel.app/qnssogkh_aza"},{name:" The Body",image:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F60wmC1e20HV8gu688GAhsWxqxPx.jpg',link:"https://tsneh.vercel.app/8ltoyyu8yxuy"},{name:"The Flea and the Acrobat",image:"https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FexT4NW9EdXG1qLZHKJnRpq3gh1H.jpg",link:'https://tsneh.vercel.app/3n4iykgtbo1o'},{name:"The Monster",image:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FlNS6qycyucewz3duTr1tf1LU688.jpg',link:'https://tsneh.vercel.app/zqiu2mhhevsc'},{name:'The Bathtub',image:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FmkZzUTNWYfGwRH2f1TzlRgouypa.jpg',link:'https://tsneh.vercel.app/uzakxwc83mgv'},{name:"The Upside Down",image:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F1teJ5dbuepfqOOs9uYhYTUjr2qs.jpg',link:'https://tsneh.vercel.app/ovxwiwjiv9_f'},],},

  {name:'Heart Beat S1',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10',shows:[
  {name:'EP 1', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10', link:'https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP1.mp4?dl=true'},
  {name:'EP 2', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10', link:'https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP2.mp4?dl=true'},
  {name:'EP 3', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10', link:'https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP3.mp4?dl=true'},
  {name:'EP 4', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10', link:'https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP4.mp4?dl=true'},
  {name:'EP 5', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10', link:'https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP5.mp4?dl=true'},
  {name:'EP 6', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10', link:'https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP6.mp4?dl=true'},
  {name:'EP 7', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10', link:'https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP7.mp4?dl=true'},
  {name:'EP 8', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10', link:'https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP8.mp4?dl=true'},
  {name:'EP 9', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10', link:'https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP9.mp4?dl=true'},
  {name:'EP 10', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10', link:'https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP10.mp4?dl=true'},
  {"name": "EP 11","image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP11.mp4?dl=true"},
  {"name": "EP 12","image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP12.mp4?dl=true"},
  {"name": "EP 13","image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP13.mp4?dl=true"},
  {"name": "EP 14","image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP14.mp4?dl=true"},
  {"name": "EP 15","image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP15.mp4?dl=true"},
  { "name": "EP 16","image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP16.mp4?dl=true"},
  {"name": "EP 17","image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP17.mp4?dl=true"},
  {"name": "EP 18","image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP18.mp4?dl=true"},
  { "name": "EP 19","image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP19.mp4?dl=true"},
  {"name": "EP 20","image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP20.mp4?dl=true"},
  {"name": "EP 21","image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP21.mp4?dl=true"},
  { "name": "EP 22","image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP22.mp4?dl=true"},
  { "name": "EP 23","image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP23.mp4?dl=true" },
  { "name": "EP 24","image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10", "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP24.mp4?dl=true" },
  {"name": "EP 25","image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP25.mp4?dl=true"},
  {"name": "EP 26","image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP26.mp4?dl=true"},
  {"name": "EP 27","image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP27.mp4?dl=true"},
  { "name": "EP 28","image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP28.mp4?dl=true" },
  { "name": "EP 29","image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP29.mp4?dl=true"},
 {"name":"EP 30","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link":"https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP30.mp4?dl=true"},{"name":"EP 31","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link":"https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP31.mp4?dl=true"},{"name":"EP 32","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link":"https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP32.mp4?dl=true"},{"name":"EP 33","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link":"https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP33.mp4?dl=true"},{"name":"EP 34","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link":"https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP34.mp4?dl=true"},{"name":"EP 35","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link":"https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP35.mp4?dl=true"},{"name":"EP 36","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link":"https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP36.mp4?dl=true"},{"name":"EP 37","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link":"https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP37.mp4?dl=true"},{"name":"EP 38","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link":"https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP38.mp4?dl=true"},{"name":"EP 39","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link":"https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP39.mp4?dl=true"},{"name":"EP 40","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link":"https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP40.mp4?dl=true"},{"name":"EP 41","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link":"https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP41.mp4?dl=true"},{"name":"EP 42","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link":"https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP42.mp4?dl=true"},{"name":"EP 43","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link":"https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP43.mp4?dl=true"},{"name":"EP 44","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link":"https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP44.mp4?dl=true"},{"name":"EP 45","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10","link":"https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP45.mp4?dl=true"},

  {
    "name": "EP 43",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP43.mp4?dl=true"
  },
  {
    "name": "EP 44",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP44.mp4?dl=true"
  },
  {
    "name": "EP 45",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP45.mp4?dl=true"
  },
  {
    "name": "EP 46",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP46.mp4?dl=true"
  },
  {
    "name": "EP 47",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP47.mp4?dl=true"
  },
  {
    "name": "EP 48",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP48.mp4?dl=true"
  },
  {
    "name": "EP 49",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP49.mp4?dl=true"
  },
  {
    "name": "EP 50",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP50.mp4?dl=true"
  },
  {
    "name": "EP 51",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP51.mp4?dl=true"
  },
  {
    "name": "EP 52",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP52.mp4?dl=true"
  },
  {
    "name": "EP 53",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP53.mp4?dl=true"
  },
  {
    "name": "EP 54",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP54.mp4?dl=true"
  },
  {
    "name": "EP 55",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP55.mp4?dl=true"
  },
  {
    "name": "EP 56",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP56.mp4?dl=true"
  },
  {
    "name": "EP 57",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP57.mp4?dl=true"
  },
  {
    "name": "EP 58",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP58.mp4?dl=true"
  },
  {
    "name": "EP 59",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP59.mp4?dl=true"
  },
  {
    "name": "EP 60",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP60.mp4?dl=true"
  },
  {
    "name": "EP 61",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP61.mp4?dl=true"
  },
  {
    "name": "EP 62",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP62.mp4?dl=true"
  },
  {
    "name": "EP 63",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP63.mp4?dl=true"
  },
  {
    "name": "EP 64",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP64.mp4?dl=true"
  },
  {
    "name": "EP 65",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP65.mp4?dl=true"
  },
  {
    "name": "EP 66",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP66.mp4?dl=true"
  },
  {
    "name": "EP 67",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP67.mp4?dl=true"
  },
  {
    "name": "EP 68",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP68.mp4?dl=true"
  },
  {
    "name": "EP 69",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP69.mp4?dl=true"
  },
  {
    "name": "EP 70",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP70.mp4?dl=true"
  },
  {
    "name": "EP 71",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP71.mp4?dl=true"
  },
  {
    "name": "EP 72",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP72.mp4?dl=true"
  },
  {
    "name": "EP 73",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP73.mp4?dl=true"
  },
  {
    "name": "EP 74",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP74.mp4?dl=true"
  },
  {
    "name": "EP 75",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP75.mp4?dl=true"
  },
  {
    "name": "EP 76",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP76.mp4?dl=true"
  },
  {
    "name": "EP 77",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP77.mp4?dl=true"
  },
  {
    "name": "EP 78",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP78.mp4?dl=true"
  },
  {
    "name": "EP 79",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP79.mp4?dl=true"
  },
  {
    "name": "EP 80",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP80.mp4?dl=true"
  },
  {
    "name": "EP 81",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP81.mp4?dl=true"
  },
  {
    "name": "EP 82",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP82.mp4?dl=true"
  },
  {
    "name": "EP 83",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP83.mp4?dl=true"
  },
  {
    "name": "EP 84",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP84.mp4?dl=true"
  },
  {
    "name": "EP 85",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP85.mp4?dl=true"
  },
  {
    "name": "EP 86",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP86.mp4?dl=true"
  },
  {
    "name": "EP 87",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP87.mp4?dl=true"
  },
  {
    "name": "EP 88",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP88.mp4?dl=true"
  },
  {
    "name": "EP 89",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP89.mp4?dl=true"
  },
  {
    "name": "EP 90",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP90.mp4?dl=true"
  },
  {
    "name": "EP 91",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP91.mp4?dl=true"
  },
  {
    "name": "EP 92",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP92.mp4?dl=true"
  },
  {
    "name": "EP 93",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP93.mp4?dl=true"
  },
  {
    "name": "EP 94",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP94.mp4?dl=true"
  },
  {
    "name": "EP 95",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP95.mp4?dl=true"
  },
  {
    "name": "EP 96",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP96.mp4?dl=true"
  },
  {
    "name": "EP 97",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP97.mp4?dl=true"
  },
  {
    "name": "EP 98",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP98.mp4?dl=true"
  },
  {
    "name": "EP 99",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP99.mp4?dl=true"
  },
  {
    "name": "EP 100",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZLOv_6Z-kY_Sa2Tsjrct0RdX8ACzY14aih-UbMzTI4CVu1d-kYFWoNp&s=10",
    "link": "https://cdw.tamilcloud.pro/Heart%20Beat%20(2024)/Heart%20Beat%20(2024)%20S01%20EP100.mp4?dl=true"
  }
  ],
  },
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
              Back to Series
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
