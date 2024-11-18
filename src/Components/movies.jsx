import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './live.css';
import './album.css';


const shows = [
  {
    name: 'Theatre Print',
    image: 'https://media.istockphoto.com/id/1494642262/photo/people-in-the-cinema-auditorium-with-empty-white-screen.jpg?s=2048x2048&w=is&k=20&c=XLSiHIO02doIcuaB8BJMTcoTsyeQtvbngcQlQZLkEW4=',
    shows: [
      { name:'Kanguva',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwqsHIIojmSJFVRY9gQlbY6NaQDNaUsu-b90mfCkI0PJHxf5nJzCJ-m0&s=10',link:'https://tinyurl.com/2yku43my'},
      
    ],
  },

  {
    name: 'HD Movies',
    image: 'https://play-lh.googleusercontent.com/5lGwoUsh5Z1eopCpGQIQjfoGqUHTJU_tAXNkdm1eiBVGGKoXqk5jX8Vm7DiAn42Lwbk6',
    shows: [
    { name:'Amaran',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzugiP-FGYgjDvKH0orm9a3csrkqljfNSwqVBS9yIeVA3_2EUNNAizHBMD&s=10',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Amaran.mp4'},
    { name:'Bloody Beggar',image:'https://upload.wikimedia.org/wikipedia/en/4/40/Bloody_Beggar.jpg',link:'https://tsneh.vercel.app/kfrxqimib1ax'},
    { name:'Brother',image:'https://timesofindia.indiatimes.com/photo/103798855.cms',link:'https://tinyurl.com/u4h76nvj'},
    { name:'Black',image:'https://upload.wikimedia.org/wikipedia/en/3/3a/Black_%282024_film%29.jpg',link:"https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Black.mp4"},
    { name:"Vettaiyan",image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULrTu7hLs5ggDAet-gSB2-ujfUA4nqb1U40cpUO0qihy1Cliz4HufKAHM&s=10',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Vettaiyan.mp4'},
    { name: 'Meiyazhagan', image: 'https://i.scdn.co/image/ab67616d0000b2737e86df2b3a35c59564738524', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Meiyazhagan.mp4' },
      {name:'Sattam',image:'https://multicinema.in/assets1/2021MoviesPoster/Sattam_En_Kaiyil.jpg',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Sattam_En_Kaiyil.mp4'},
  
    { name: 'Hitler', image: 'https://assets.gadgets360cdn.com/pricee/assets/product/202312/Hitler1_1703675553.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Hitler.mp4'},
    
    { name: 'KP chelladurai', image: 'https://m.media-amazon.com/images/M/MV5BN2JmODY2NDYtNDk0Zi00ZDM1LTlkYjktNDFkMmUzZDlmODA3XkEyXkFqcGc@._V1_.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Kozhipannai_Chelladurai.mp4' },
    { name: 'Tholar cheguevara', image: 'https://m.media-amazon.com/images/M/MV5BMjNkNWM4NDItZDBjNi00N2EzLTg4YmYtMTNkYzJlMjE3ZWRjXkEyXkFqcGc@._V1_.jpg', link: 'https://tsneh.vercel.app/vhy7_dipwhlz' },
    { name: 'Kadaisi Ulaga Por', image: 'https://m.media-amazon.com/images/M/MV5BODYzOGY4NmEtYjRiNi00OGI3LWE4MWItZWJlM2MwNDUwMDM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Nandhan.mp4' },
    { name: 'Nandhan', image: 'https://chennaivision.com/wp-content/uploads/2024/09/post-7.png', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Kadaisi_Ulaga_Por.mp4'},
    { name: 'Lubber Pandhu', image: 'https://assetscdn1.paytm.com/images/cinema/_Lubber-Pandhu---Gallery-13cf1990-711b-11ef-a8ad-e19aad791794.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Lubber_Pandhu.mp4' },
    { name: 'GOAT', image: 'https://images.news18.com/ibnlive/uploads/2024/06/fotojet-2024-06-22t145736.232-2024-06-713c0097066abbd6ee404f96ef27a872.jpg?impolicy=website&width=640&height=480', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Goat.mp4' },
    { name: 'Vazhai', image: 'https://img1.imageride.net/images/2024/08/24/GNfbjytfJh4TYJb.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Vaazhai.mp4' },
    { name: 'Kottukkaali', image: 'https://img.imageride.net/images/2024/08/24/GNRGfbjF4hKN.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Kottukkaali.mp4' },
    { name: 'Rayan', image: 'https://tse3.mm.bing.net/th?id=OIP._F_HPMCsDiSPVHXOwXUhKQAAAA&pid=Api&P=0&h=220', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Raayan.mp4' },
    { name: 'Kalki', image: 'https://images.news18.com/ibnlive/uploads/2024/06/kalki-2898-ad-movie-first-review-2024-06-74247ab144a1de861d9e034bf27aa133.jpg',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Kalki_2898_AD.mp4' },
    { name: 'Thangalan', image: 'https://multicinema.in/assets1/2021MoviesPoster/Thangalaan.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Thangalaan.mp4' },
    { name: 'Raghu Thatha', image: 'https://multicinema.in/assets1/2021MoviesPoster/Raghu_Thatha.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Raghu_Thatha.mp4' },
    { name: 'Demonty 2', image: 'https://images.ottplay.com/images/a-poster-of-demonte-colony-2-279-1691154610.jpeg?impolicy=ottplay-20210210&width=1200&height=675', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Demonte_Colony_2.mp4' },
    { name: 'Andhagan', image: 'https://m.media-amazon.com/images/M/MV5BMWJjOGRmMWMtMDM0NC00NGVlLTk2NTMtZjU4NzdiNTQ2ZTkwXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_FMjpg_UX1000_.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Andhagan.mp4' },
    { name: 'Boat', image: 'https://www.infoflick.com/news_images/2024/08/boat1722676860.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Boat.mp4' },
    { name: 'NOVP', image: 'https://tse3.mm.bing.net/th?id=OIP.Ux9vQkIcDO89X6gVtKgGBAHaEc&pid=Api&P=0&h=220', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Nanban_Oruvan_Vantha.mp4' },
    { name: 'Vascodagama', image: 'https://tse4.mm.bing.net/th?id=OIP.nFmbqkM2XxKS-TDUWmez4gHaEc&pid=Api&P=0&h=220', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/VascoDaGama.mp4' },
    { name: 'MPM', image: 'https://images.filmibeat.com/img/popcorn/list_items/mazhai-pidikatha-manithan-20220615150237-406.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Mazhai_Pidikkatha_Manithan.mp4' },
    { name: 'Star', image: 'https://tinyurl.com/5n8xc33v', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Star.mp4' },
    { name: 'Blue Star', image: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Blue_Star_%28film%29.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Blue_Star.mp4' },
    { name: 'Joe', image: 'https://tinyurl.com/y8bz26nm', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Joe.mp44' },
    { name: 'Ayalan', image: 'https://m.media-amazon.com/images/M/MV5BOWQ0NDI1MjAtODI0Yi00ODhjLWI2M2UtZjk2ZjYxMTVlZmMwXkEyXkFqcGdeQXVyMTQzNjQ4ODY0._V1_FMjpg_UX1000_.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Ayalaan.mp4' },
    { name: 'Aavesham', image: 'https://static.moviecrow.com/gallery/20240223/226542-aavesham.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Aavesham.mp4' },
    { name: 'Hi Nanna', image: 'https://tinyurl.com/ye76f2r4', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Hi_Nanna.mp4' },
    { name: 'Aranmanai 4', image: 'https://tinyurl.com/bdzam9p4', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Aranmanai_4.mp4' },
    { name: 'PT SIR', image: 'https://tinyurl.com/3dapj4h8', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/PT_Sir.mp4' },
    { name: 'Goat Life', image: 'https://tse1.mm.bing.net/th?id=OIP.J3vPn5YeOP8VVw5ZjgYv7AHaEK&pid=Api&P=0&h=220', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Aadujeevitham_The_Goat_Life.mp4' },
    { name: 'Maharaja', image: 'https://tse3.mm.bing.net/th?id=OIP.1xrCi3RgSNSgLWIxCCC89QHaEK&pid=Api&P=0&h=220', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Maharaja.mp4' },
    { name: 'Rathnam', image: 'https://tse4.mm.bing.net/th?id=OIP.dtFmkkf-VxhJ8acpQ8RYmAHaEK&pid=Api&P=0&h=220', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Rathnam.mp4' },
    //{ name: 'Chutney Sambar', image: 'https://www.cinefry.co.in/wp-content/uploads/2024/07/Chutney-Sambar.webp', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Chutney_Sambar_S01_E01_06.mp4' },
    { name: 'Garudan', image: 'https://tse2.mm.bing.net/th?id=OIP._cE5MahbnwAc3goANzq3VgHaEK&pid=Api&P=0&h=220', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Garudan.mp4' },
    
    { name: 'Siren', image: 'https://tse2.mm.bing.net/th?id=OIP.FSqlTAY03jDjz6qFQLNeggHaEK&pid=Api&P=0&h=220', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Siren.mp4' },
    { name: 'Marakkuma Nenjam', image: 'https://c.saavncdn.com/336/Marakkuma-Nenjam-Tamil-2023-20230708184606-500x500.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Marakkuma_Nenjam.mp4' },
    { name: 'Misson C1', image: 'https://www.nowrunning.com/content/movie/2023/missi-27948/bg1_missionchapter1.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Mission_Chapter_1.mp4' },
    { name: 'Singapore Saloon', image: 'https://tse4.mm.bing.net/th?id=OIP.fHGEz6Rb7q0ydj_u6vF0JwHaEK&pid=Api&P=0&h=220', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Singapore_Saloon.mp4' },
    { name: 'Weapon', image: 'https://tse3.mm.bing.net/th?id=OIP.vrZ3fsol38BpGyASY68O-gHaJQ&pid=Api&P=0&h=220', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Weapon_(2024).mp4' },
    { name: 'Haraa', image: 'https://multicinema.in/assets1/2021MoviesPoster/Haraa.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Haraa.mp4' },
    { name: 'Rasavathi', image: 'https://multicinema.in/assets1/2021MoviesPoster/Rasavathi.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Rasavathi.mp4' },
    { name: 'Hot Spot', image: 'https://multicinema.in/assets1/2021MoviesPoster/Hot_Spot.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Hot_Spot.mp4' },
    { name: 'Kalvan', image: 'https://multicinema.in/assets1/2021MoviesPoster/Kalvan.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Kalvan.mp4' },
    { name: 'Romeo', image: 'https://multicinema.in/assets1/2021MoviesPoster/Romeo.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Romeo.mp4' },
    { name: 'Dear', image: 'https://multicinema.in/assets1/2021MoviesPoster/DeAr.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/DeAr.mp4' },
   
    { name: 'J Baby', image: 'https://multicinema.in/assets1/2021MoviesPoster/J_Baby.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/J_Baby.mp4' },
  
    { name: 'Lover', image: 'https://multicinema.in/assets1/2021MoviesPoster/Lover.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Lover.mp4' },
    { name: 'Captain Miller', image: 'https://multicinema.in/assets1/2021MoviesPoster/Captain_Miller.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Captain_Miller.mp4' },
    { name: 'Salar', image: 'https://multicinema.in/assets1/2021MoviesPoster/Salaar_Cease_Fire_Part_1.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Salaar_Cease_Fire_Part_1.mp4' },
    { name: 'Sevappi', image: 'https://multicinema.in/assets1/2021MoviesPoster/Sevappi.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Sevappi.mp4' },
    { name: 'Annapoorani', image: 'https://multicinema.in/assets1/2021MoviesPoster/Annapoorani.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Annapoorani.mp4' },
    { name: 'Jigarthanda', image: 'https://multicinema.in/assets1/2021MoviesPoster/Jigarthanda_Double_X.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Jigarthanda_Double_X.mp4' },
    { name: 'Japan', image: 'https://multicinema.in/assets1/2021MoviesPoster/Japan.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Japan.mp4' },
    { name: 'Chitha', image: 'https://multicinema.in/assets1/2021MoviesPoster/Chithha.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Chithha.mp4' },
    { name: 'Leo', image: 'https://multicinema.in/assets1/2021MoviesPoster/Leo.jpg', link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Leo.mp4' },
    { name: 'Jawan', image: 'https://multicinema.in/assets1/2021MoviesPoster/Jawan.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Jawan.mp4' },
    { name: 'Mark Antony', image: 'https://multicinema.in/assets1/2021MoviesPoster/Mark_Antony.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Mark_Antony.mp4' },
    { name: 'Chandramukhi 2', image: 'https://multicinema.in/assets1/2021MoviesPoster/Chandramukhi_2.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Chandramukhi_2.mp4' },
    { name: 'Kushi', image: 'https://multicinema.in/assets1/2021MoviesPoster/Kushi.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Romeo.mp4' },
    { name: 'Lucky Man', image: 'https://multicinema.in/assets1/2021MoviesPoster/Lucky_Man.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Lucky_Man.mp4' },
    { name: 'LGM', image: "https://multicinema.in/assets1/2021MoviesPoster/LGM_Let's_Get_Married.jpg", link: "https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/LGM_Let's_Get_Married.mp4" },
    { name: 'Jailer', image: 'https://multicinema.in/assets1/2021MoviesPoster/Jailer.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Jailer.mp4' },
    { name: 'Maveeran', image: 'https://multicinema.in/assets1/2021MoviesPoster/Maaveeran.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Maaveeran.mp4' },
    { name: 'Por Thozhil', image: 'https://multicinema.in/assets1/2021MoviesPoster/Por_Thozhil.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Por_Thozhil.mp4' },
    { name: 'Appatha', image: 'https://multicinema.in/assets1/2021MoviesPoster/Appatha.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Appatha.mp4' },
    { name: 'Mamannan', image: 'https://multicinema.in/assets1/2021MoviesPoster/Maamannan.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Maamannan.mp4' },
    //{ name: 'Adipurush', image: 'https://multicinema.in/assets1/2021MoviesPoster/Adipurush.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Adipurush.mp4' },
    { name: 'Takkar', image: 'https://multicinema.in/assets1/2021MoviesPoster/Takkar.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Takkar.mp4' },
   
    { name: 'PS 2', image: 'https://multicinema.in/assets1/2021MoviesPoster/Ponniyin_Selvan_2.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Ponniyin_Selvan_2.mp4' },
    { name: 'Aug 16 1947', image: 'https://multicinema.in/assets1/2021MoviesPoster/August_16,_1947.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/August_16,_1947.mp4' },
    { name: 'Rudhran', image: 'https://multicinema.in/assets1/2021MoviesPoster/Rudhran.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Rudhran.mp4' },
    { name: 'Indian', image: 'https://tse3.mm.bing.net/th?id=OIP.kIGZqDMSKxes8ZgTq5S4cwHaEK&pid=Api&P=0&h=220', link: 'https://tinyurl.com/bddjccbm' },
    { name: 'Indian 2', image: 'https://tse3.mm.bing.net/th?id=OIP.Ua5_ZEp9dPl7t0MfPJHWEAHaJx&pid=Api&P=0&h=220', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Indian_2.mp4' },
    { name: 'Gilli', image: 'https://tse1.mm.bing.net/th?id=OIP.9PcN-V68fxHcgzAD6m2KRgHaEK&pid=Api&P=0&h=220', link: 'https://tinyurl.com/3faf5733' },
    { name: 'Silunu oru kathal', image: 'https://tse2.mm.bing.net/th?id=OIP.tZC2NWAFN5eQPxmsq7k7VQHaHa&pid=Api&P=0&w=300&h=300', link: 'https://tinyurl.com/m24ykm8c' },
    { name: 'Singam', image: 'https://tse2.mm.bing.net/th?id=OIP.A8DeQzl3jEMO0CrxPkI0QgHaK9&pid=Api&P=0&h=220', link: 'https://tinyurl.com/rzr9cyyr' },
    { name: 'Singam 2', image: 'https://tse4.mm.bing.net/th?id=OIP.fwI3mpQ8MBt8c0WTwXrO1gHaLH&pid=Api&P=0&h=220', link: 'https://tinyurl.com/2f278ww5' },
    { name: 'Singam 3', image: 'https://static1.showtimes.com/poster/660x980/singam-3-149662.jpg', link: 'https://tinyurl.com/4purxjhh' },
    { name: 'Varanam Aayiram', image: 'https://tse4.mm.bing.net/th?id=OIP.D5omBps0JHW4awBpAFl2gQHaLH&pid=Api&P=0&h=220', link: 'https://tinyurl.com/yc6nkhwf' },
    { name: 'Managaram', image: 'https://fr.web.img6.acsta.net/pictures/20/05/08/20/43/3400430.jpg', link: 'https://tinyurl.com/3e8z4rvr' },
    { name: 'Mankarathe', image: 'https://wallpapercave.com/wp/wp7501819.jpg', link: 'https://tinyurl.com/bdfzs46y' },
    { name: 'RajiniMurugan', image: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/54ea49e8c68cb4efd2200aa4ede5ae8e32098a643d61e072be278ba745dbe963._RI_V_TTW_.jpg', link: 'https://tinyurl.com/yc52yfmk' },

     
    ],
  },

  {
    name: 'Dubbed Movies',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkn91GpNi88CicRs375878Z6hZWXOpU4gvg&s',shows:[
      {name:"ARM",image:"https://multicinema.in/assets1/2021MoviesPoster/ARM.jpg",link:"https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/ARM.mp4"},
      { name: 'Devara', image: 'https://cdn.gulte.com/wp-content/uploads/2024/01/Devara-scaled.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Devara.mp4' },
      { name: 'Adipurush', image: 'https://multicinema.in/assets1/2021MoviesPoster/Adipurush.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Adipurush.mp4' },
      {name:"Turbo",image:"https://multicinema.in/assets1/2021MoviesPoster/Turbo.jpg",link:"https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Turbo.mp4"},
      {name:"Aavesham",image:"https://multicinema.in/assets1/2021MoviesPoster/Aavesham.jpg",link:"https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Aavesham.mp4"},
      {name:"Chotta Bheem",image:"https://multicinema.in/assets1/2021MoviesPoster/Chhota_Bheem_and_the_Curse_of_Damyaan.jpg",link:"https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Chhota_Bheem_and_the_Curse_of_Damyaan.mp4"},
      {name:"Goat Life",image:"https://multicinema.in/assets1/2021MoviesPoster/Aadujeevitham_The_Goat_Life.jpg",link:"https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Aadujeevitham_The_Goat_Life.mp4"},
      {name:'Suryas Saturday',image:'https://multicinema.in/assets1/2021MoviesPoster/Suryas_Saturday.jpg',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Suryas_Saturday.mp4'},
      // {name:"",image:"",link:""},
      // {name:"",image:"",link:""},
      // {name:"",image:"",link:""},
      // {name:"",image:"",link:""},
      // {name:"",image:"",link:""},
      { name: 'Manjummel Boys', image: 'https://tinyurl.com/2nn9eydy', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Manjummel_Boys.mp4' },
    { name: 'Premalu', image: 'https://tinyurl.com/yn5t9a9p', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Premalu.mp4' },
    { name: 'Family Star', image: 'https://multicinema.in/assets1/2021MoviesPoster/The_Family_Star.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/The_Family_Star.mp4' },
    { name: '12th Fail', image: 'https://multicinema.in/assets1/2021MoviesPoster/12th_Fail.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/12th_Fail.mp4' },
    { name: 'Avatar 2', image: 'https://multicinema.in/assets1/2021MoviesPoster/Avatar_2.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Avatar_2.mp4' },

    ],
  },
  {
    name: 'Harry Potter',
    image: 'https://i5.walmartimages.com/asr/11a9f800-47ff-4ba4-ac8d-43bd0be5c2e4.b86b11aa6cb832d3761845fe5b3076c1.jpeg',
    shows: [
        { name: "Sorcerer's Stone", image: "https://tinyurl.com/7j795tmh", link: "https://tsneh.vercel.app/75rhzaeeyk2t" },
        { name: "Chamber of Secrets", image: "https://tinyurl.com/bd4m5tk8", link: "https://tsneh.vercel.app/6ltfpkrebevz" },
        { name: "Prisoner of Azkaban", image: "https://tinyurl.com/5655uwsu", link: "https://tsneh.vercel.app/bysb4ed82sp6" },
        { name: "Goblet of Fire", image: "https://tinyurl.com/3a8fcukr", link: "https://tsneh.vercel.app/npjd3s7lan6m" },
        { name: "Order of the Phoenix", image: "https://tinyurl.com/2adn39xt", link: "https://tsneh.vercel.app/sgkjswsd-czh" },
        { name: "Half-Blood Prince", image: "https://tinyurl.com/4jm2nnch", link: "https://tsneh.vercel.app/h3rn3rjihw2n" },
        { name: "Deathly Hallows Part 1", image: "https://tinyurl.com/mw2v2kv7", link: "https://tsneh.vercel.app/c2yaskvyveig" },
        { name: "Deathly Hallows Part 2", image: "https://tinyurl.com/yjb7jhn4", link: "https://tsneh.vercel.app/vp9mkbibcn6q" },

    ],
  },
  {
    name:"Toy Story",image:"https://image.tmdb.org/t/p/original/dSr82KHmtgiWaMYx53QgtxQmbCw.jpg",shows:[
      {name:"Toy Story 1",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnCdlRuLP67KQNBnZHm9eJaOqSPpBdSHfGtQ&s",link:"https://d5.uptocdn.com/dl/OnL0-13oIjDriY3tuNsULQ/1732070509/p/Tamil%20Dubbed%20Collections/Toy%20Story%20Trilogy%20Collections/Toy%20Story%201%20(1995)/Mp4%20HD%20(640x360)/Toy%20Story%201%20(1995)%20HD%20(640x360).mp4"},
      {name:"Toy Story 2",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7UnVe5koWHuUSa4XRH482AvGCtWFoDEQbRw&s",link:"https://d5.uptocdn.com/dl/9YuSTwe9NyXT1u5tJ5MApQ/1732070940/p/Tamil%20Dubbed%20Collections/Toy%20Story%20Trilogy%20Collections/Toy%20Story%202%20(1999)/Mp4%20HD%20(640x360)/Toy%20Story%202%20(1999)%20HD%20(640x360).mp4"},
      {name:"Toy Story 3",image:"https://m.media-amazon.com/images/I/81DOyQ93xmL._AC_UF1000,1000_QL80_.jpg",link:"https://d5.uptocdn.com/dl/mhyCWwH7wzHlA0LvhvUD4A/1732070972/p/Tamil%20Dubbed%20Collections/Toy%20Story%20Trilogy%20Collections/Toy%20Story%203%20(2010)/Mp4%20HD%20(640x360)/Toy%20Story%203%20(2010)%20HD%20(640x360).mp4"},
    ],
  },

  {
    name:'Spiderman',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDiK8YB7TeXLsGYdUmDFkF9uyYOnQovvEicRMOy1Lvo4vK3uMyQgeYTxgZk52mvav3yhs&usqp=CAU',shows:[
      
      {name:'2002',image:'https://preview.redd.it/spider-man-2002-is-one-of-the-greatest-superhero-movies-v0-slnqljmzsyz91.jpg?width=640&crop=smart&auto=webp&s=c9e4e28792e8f630b445a17b0ce12179316fd3e3',link:'https://tsneh.vercel.app/c-atwrtlmcyx'}, 
      {name:'2004',image:'https://www.metacritic.com/a/img/resize/755eb2129657e69870ee7213d93549532f144e79/catalog/provider/6/12/6-1-816262-52.jpg?auto=webp&fit=crop&height=675&width=1200',link:'https://tsneh.vercel.app/wsifirzfrcw2'}, 
      {name:'2007',image:'https://www.sonypictures.ca/sites/canada/files/2022-01/DP_3861875_SpiderMan3_2007_LSR_2000x3000_CAN%20%281%29.jpg',link:'https://tsneh.vercel.app/aqdzc-c0mgol'}, 
      {name:'2012',image:'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_FMjpg_UX1000_.jpg',link:'https://tsneh.vercel.app/wb6jgjmlpgr1'}, 
      {name:'2014',image:'https://m.media-amazon.com/images/I/91BMECfQUNL._AC_UF1000,1000_QL80_.jpg',link:'https://tsneh.vercel.app/ytbdvvvt4exy'}, 
      {name:'2017',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWX1lRxBXfnPC0INO818Wz2C0aiPZMwxhixxrve7Yxl4I6ZYJrAHBEEVTu&s=10',link:'https://tsneh.vercel.app/atyqyyp8b7n9'}, 
      {name:'2019',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLCOza-uwxWG7RvSWUOJMbxH5ib5rpzM5hc4LHwf_4S2Ygfq3b3SOKXEzX&s=10',link:'https://tsneh.vercel.app/ji4dlei5nqie'}, 
      {name:'2021',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0PDsytA8OtOq6eW88VNu3_fEvUjaql3TiIMDhZ67rF-MtgXHiISC1yyt4&s=10',link:'https://tsneh.vercel.app/1hcqfjqctvl-'}, 
    ],
  },
  
   {name:'Marvel',image:'https://pbs.twimg.com/profile_images/1837996521809211392/ZPfq2KOE_400x400.jpg',shows:[
     
   {name:'Iron Man',image:'https://images.moviesanywhere.com/45589cb573be13bb984b078ed3e1cf9e/a0652686-b625-4b41-bdf1-f32c3d9471a6.webp?h=375&resize=fit&w=250',link:'https://tsneh.vercel.app/66czfsv5qcrf'},
   {name:'The Incredible Hulk',image:'https://images.moviesanywhere.com/af98bdeec9e6b9ea7ed3720e25429b29/865d13d3-da63-4174-ad69-e1fdd446de82.webp?h=375&resize=fit&w=250',link:'https://tsneh.vercel.app/szr38isis7an'},
   {name:'Iron Man 2',image:'https://images.moviesanywhere.com/f63168b72788f0d189548e7130d3ffac/78720b79-de19-4d10-b80b-1172b068328a.webp?h=375&resize=fit&w=250',link:'https://tsneh.vercel.app/djhcyub2nsbq'},     
   {name:'Thor',image:'https://images.moviesanywhere.com/d2c6e9c510b22933e69ca30f8ec6f5a3/4e9d04e3-787e-41bf-aaaf-98a78d5c9f9d.webp?h=375&resize=fit&w=250',link:'https://dls4.mrfooll.xyz/AgADEA2907626'},
   {name:'First Avenger',image:'https://images.moviesanywhere.com/fa9e94046ada1dba2df65ec7c328ec2a/f7455d8d-9288-4bd5-a283-586b8b4abe93.webp?h=375&resize=fit&w=250',link:'https://tsneh.vercel.app/lvygketr67si'},     
   {name:'Avengers',image:'https://images.moviesanywhere.com/a36700f2ab20c7d495566843eea79dde/745c9b06-af55-4510-836d-9a320a3f26f9.webp?h=375&resize=fit&w=250',link:'https://dls4.mrfooll.xyz/AgADIQ2907637'},
    
   {name:'Iron Man 3',image:'https://images.moviesanywhere.com/9e6a7d319487c4ef58543298ffdc2fb9/9cac9d6f-a5f5-4e3b-91b5-8ad8d538fbb4.webp?h=375&resize=fit&w=250',link:'https://tsneh.vercel.app/b8t5xrxx6ywx'},
   {name:'Dark World',image:'https://images.moviesanywhere.com/e2c77d0d2602acdc3cd56ff55ff4949c/f8e80326-7237-4ffb-9f54-d6504c5f9e32.webp?h=375&resize=fit&w=250',link:'https://tsneh.vercel.app/6zr66k9j2j8l'},
   {name:'Winter Soldier',image:'https://images.moviesanywhere.com/2cde825213e154ea76959084c78d026c/d1a27851-992c-4cd2-bf10-2228a8a77d8f.webp?h=375&resize=fit&w=250',link:'https://tsneh.vercel.app/1yr42dwpdgqf'},
   {name:'Guardians of Galaxy',image:'https://images.moviesanywhere.com/959ef1bcb5c9a8e31e384f8d20384efa/7b57798c-b6d2-4b46-8487-bc0ca59934ec.webp?h=375&resize=fit&w=250',link:''},
  {name:'Age of Ultron',image:'https://images.moviesanywhere.com/40b00f447b110238502723e4670df992/3b4c0c8c-2b01-4f0f-af09-98faf6e7bb0c.webp?h=375&resize=fit&w=250',link:''},
  //     {name:'Ant-Man',image:'https://images.moviesanywhere.com/13421a5712257645b569175472983f39/7964cad0-bccf-4d88-8d4c-3dae3301de2b.webp?h=375&resize=fit&w=250',link:''},

  //     {name:' Civil War',image:'https://images.moviesanywhere.com/c6df1e5e0af0b0f6dc0af00fa54384fb/97bb58ff-b746-42f5-a61d-beb013a488e4.webp?h=375&resize=fit&w=250',link:''},
  //     {name:'Doctor Strange',image:'https://images.moviesanywhere.com/367e2c03ac2d0c9224edc86e8aa40c93/e2ec6244-9355-448f-baed-8e937ba8685e.webp?h=375&resize=fit&w=250',link:''},
  //     {name:'Vol 2 ',image:'https://images.moviesanywhere.com/367e2c03ac2d0c9224edc86e8aa40c93/e2ec6244-9355-448f-baed-8e937ba8685e.webp?h=375&resize=fit&w=250',link:''},
  //     {name:'Homecoming',image:'https://images.moviesanywhere.com/a96502b00a5e01ea17843dd02475caf0/6a605404-34c0-46c9-a9f9-29ee2d9e2303.webp?h=375&resize=fit&w=250',link:''},
  //     {name:'Ragnarok',image:'https://images.moviesanywhere.com/9b8962dc632962d879eb5f1e91fd75f7/cf721a74-d1f5-476c-95be-c443efe9a690.webp?h=375&resize=fit&w=250',link:''},
  //     {name:'Black Panther',image:'https://images.moviesanywhere.com/3d3fd427d5b3a362e024933dbc203623/c37386d4-b7c2-49c9-b487-2ba6c0ec5879.webp?h=375&resize=fit&w=250',link:''},
  //     {name:'Infinity War ',image:'https://images.moviesanywhere.com/0473778fb19af5e749f06d249804ba13/887b650e-5661-4fd7-aa24-bf38179342a5.webp?h=375&resize=fit&w=250',link:''},
  //     {name:'Ant-Man and Wasp',image:'https://images.moviesanywhere.com/8f27781bd34070cf52f5a18bdc1a820c/5bff2157-7614-4183-a4a7-b9d14d3f9c9c.webp?h=375&resize=fit&w=250',link:''},
  //     {name:'Captain Marvel',image:'https://images.moviesanywhere.com/f6254a2654d750658f8df42332a5ce24/a30837cb-1bac-4a04-8603-f224fab8f480.webp?h=375&resize=fit&w=250',link:''},
  //     {name:'Endgame ',image:'https://images.moviesanywhere.com/4677177f6f0595289bc3e767e7b47459/1d6c6c73-ab1e-4453-969c-6a4e965ebb37.webp?h=375&resize=fit&w=250',link:''},
  //     {name:'Far From Hiome ',image:'https://images.moviesanywhere.com/d280caf10458b1f6e476a2f9c2f7ae84/3bc8112b-904d-432a-9ba3-bd3dd85a381b.webp?h=375&resize=fit&w=250',link:''},
    
  //     {name:'Black Widow',image:'https://images.moviesanywhere.com/ad9231fa430a47863531781333c6bb9f/b35f1409-eb17-4a81-985a-1fde3a087613.webp?h=375&resize=fit&w=250',link:''},
  //     {name:'Shang-Chi',image:'https://images.moviesanywhere.com/0c8c13d8b3f28e4e25192d4dc8364de2/014180d5-8ebb-4ec6-a84e-9332f9b4ec06.webp?h=375&resize=fit&w=250',link:''},
  //     {name:'Eternals ',image:'https://images.moviesanywhere.com/acdd3c73c67d756fb920845ad7c88c8f/eb62e721-3ce3-4ec0-b44c-1bd8bc073d87.webp?h=375&resize=fit&w=250',link:''},
  //     {name:'No Way Home ',image:'https://images.moviesanywhere.com/5a7e82e7749d6dd8e447fcfeec50c064/55462afc-41ad-4322-ad46-1caca29fcc36.webp?h=375&resize=fit&w=250',link:''},
  //     {name:'Multiverse of Madness',image:'https://images.moviesanywhere.com/f9294f39c310425bc52732ae490549b4/9812ca94-e25f-46ee-9874-090857eb0ab7.webp?h=375&resize=fit&w=250',link:''},
  //     {name:'Wakanda Forever',image:'https://images.moviesanywhere.com/19451f09463b439a7ec9937a29c37064/8b82ebaf-750d-4589-9425-e9726ee2a371.webp?h=375&resize=fit&w=250',link:''},

    
  //     {name:'Quantumania',image:'https://images.moviesanywhere.com/91f18a89a01c903e7af188e9911f9c6e/7bce707a-684d-4c39-b125-3bbf2ff2412d.webp?h=375&resize=fit&w=250',link:''},
  //     {name:'Vol 3 ',image:'https://images.moviesanywhere.com/e5158b7036cb6fb709889600f78f25e2/4a2b9db6-f8d7-47df-a6d3-9a093e6791a1.webp?h=375&resize=fit&w=250',link:''},
  //     {name:'The Marvels ',image:'https://images.moviesanywhere.com/91c9dd5bf3087f966d0a60f709a8b09e/d22b7140-046b-42cc-81a9-b760160eb5ff.webp?h=375&resize=fit&w=250',link:''},
  //     {name:'Deadpool & Wolverine ',image:'https://images.moviesanywhere.com/b50aa533f5b431b818fa18bb7aa298eb/0f6ef9a6-23e6-47f7-b1ac-08e755eaf26a.webp?h=375&resize=fit&w=250',link:''},
      
  //     //{name:'',image:'',link:''},
  //     // {name:'',image:'',link:''},
  //     // {name:'',image:'',link:''},
  //     // {name:'',image:'',link:''},
  //     // {name:'',image:'',link:''},
  //     // {name:'',image:'',link:''},
    
  ],
  },
];

const Movies = () => {
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
            <button onClick={handleBackClick} className='back-button'>Back to Movies</button>
            <h2 className='hi'>{selectedAlbum.name}</h2>
            <div className='play'>
              {selectedAlbum.shows.map((video, index) => (
                <div key={index} className='son' onClick={() => handleVideoClick(video)}>
                  <img src={video.image} alt={video.name} />
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

export default Movies;
