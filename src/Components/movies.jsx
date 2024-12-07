import React, { useState, useEffect } from 'react';
import Plyr from 'plyr';
import './live.css';
import './album.css';


const shows = [
  {
    name: 'Theatre Print',
    image: 'https://media.istockphoto.com/id/1494642262/photo/people-in-the-cinema-auditorium-with-empty-white-screen.jpg?s=2048x2048&w=is&k=20&c=XLSiHIO02doIcuaB8BJMTcoTsyeQtvbngcQlQZLkEW4=',
    shows: [
        {name:'Pushpa 2',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTheRlM_HeB2-5rRx8YV3zDdGWpelHHHX3XLbdsl62EUI5eszSjUKkHq61k&s=10',link:'https://tamil.openmv.site/Pushpa%202%20The%20Rule%20(2024)%20HQ%20DVDScr%20Single%20Part%20(720p)%20HEVC.mp4'},
      {name:'Sorgavasal',image:'https://tinyurl.com/44wakenz',link:'https://tamil.openmv.site/Sorgavaasal%20(2024)%20HQ%20DVDScr%20Single%20Part%20(720p)%20HEVC.mp4'}, 
    ],
  },

  {
    name: 'HD Movies',
    image: 'https://play-lh.googleusercontent.com/5lGwoUsh5Z1eopCpGQIQjfoGqUHTJU_tAXNkdm1eiBVGGKoXqk5jX8Vm7DiAn42Lwbk6',
    shows: [
      {name:'SIR', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtRVLhfpC7jveOTXFVu0sG1Tt-dAfUIoA08ytB-VbIw&s',link:'https://dls4.mrfooll.xyz/AgADJw3025591'},
        { name:'Kanguva',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwqsHIIojmSJFVRY9gQlbY6NaQDNaUsu-b90mfCkI0PJHxf5nJzCJ-m0&s=10',link:'https://dls4.mrfooll.xyz/AgADzh2992347'},
      {name:'Lucky Baskhar',image:'https://tsneh.vercel.app/huef1u-3-e0p',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Lucky_Baskhar.mp4'},
      {name:'Line Man',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4VYdC7jlraoiMX7Dg3EpV8AKv3dMduTHTBo3Dg68X5lJRbsjEfLe6rjSj&s=10',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Lineman.mp4'},
    { name:'Amaran',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzugiP-FGYgjDvKH0orm9a3csrkqljfNSwqVBS9yIeVA3_2EUNNAizHBMD&s=10',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Amaran.mp4'},
   { name:'Bloody Beggar',image:'https://upload.wikimedia.org/wikipedia/en/4/40/Bloody_Beggar.jpg',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Bloody_Beggar.mp4'},
    { name:'Brother',image:'https://timesofindia.indiatimes.com/photo/103798855.cms',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Brother.mp4'},
    { name:'Black',image:'https://upload.wikimedia.org/wikipedia/en/3/3a/Black_%282024_film%29.jpg',link:"https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Black.mp4"},
    { name:"Vettaiyan",image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULrTu7hLs5ggDAet-gSB2-ujfUA4nqb1U40cpUO0qihy1Cliz4HufKAHM&s=10',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Vettaiyan.mp4'},
    { name: 'Meiyazhagan', image: 'https://i.scdn.co/image/ab67616d0000b2737e86df2b3a35c59564738524', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Meiyazhagan.mp4' },
      {name:'Sattam',image:'https://multicinema.in/assets1/2021MoviesPoster/Sattam_En_Kaiyil.jpg',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Sattam_En_Kaiyil.mp4'},
      {name:'Petta rap',image:'https://m.media-amazon.com/images/M/MV5BZDZiNjRlOTQtNDBkNy00MDgxLTgxZDQtNTc5Zjg2NWM2NGZlXkEyXkFqcGc@._V1_.jpg',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Petta_Rap.mp4'},
    { name: 'Hitler', image: 'https://assets.gadgets360cdn.com/pricee/assets/product/202312/Hitler1_1703675553.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Hitler.mp4'},
    
    { name: 'KP Chelladurai', image: 'https://m.media-amazon.com/images/M/MV5BN2JmODY2NDYtNDk0Zi00ZDM1LTlkYjktNDFkMmUzZDlmODA3XkEyXkFqcGc@._V1_.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Kozhipannai_Chelladurai.mp4' },
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
 //   { name: 'Indian', image: 'https://tse3.mm.bing.net/th?id=OIP.kIGZqDMSKxes8ZgTq5S4cwHaEK&pid=Api&P=0&h=220', link: 'https://tinyurl.com/bddjccbm' },
    { name: 'Indian 2', image: 'https://tse3.mm.bing.net/th?id=OIP.Ua5_ZEp9dPl7t0MfPJHWEAHaJx&pid=Api&P=0&h=220', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Indian_2.mp4' },
  //  { name: 'Gilli', image: 'https://tse1.mm.bing.net/th?id=OIP.9PcN-V68fxHcgzAD6m2KRgHaEK&pid=Api&P=0&h=220', link: 'https://tinyurl.com/3faf5733' },
    { name: 'Silunu oru kathal', image: 'https://tse2.mm.bing.net/th?id=OIP.tZC2NWAFN5eQPxmsq7k7VQHaHa&pid=Api&P=0&w=300&h=300', link: 'https://tinyurl.com/m24ykm8c' },
    // { name: 'Singam', image: 'https://tse2.mm.bing.net/th?id=OIP.A8DeQzl3jEMO0CrxPkI0QgHaK9&pid=Api&P=0&h=220', link: 'https://tinyurl.com/rzr9cyyr' },
    // { name: 'Singam 2', image: 'https://tse4.mm.bing.net/th?id=OIP.fwI3mpQ8MBt8c0WTwXrO1gHaLH&pid=Api&P=0&h=220', link: 'https://tinyurl.com/2f278ww5' },
    // { name: 'Singam 3', image: 'https://static1.showtimes.com/poster/660x980/singam-3-149662.jpg', link: 'https://tinyurl.com/4purxjhh' },
    // { name: 'Varanam Aayiram', image: 'https://tse4.mm.bing.net/th?id=OIP.D5omBps0JHW4awBpAFl2gQHaLH&pid=Api&P=0&h=220', link: 'https://tinyurl.com/yc6nkhwf' },
    // { name: 'Managaram', image: 'https://fr.web.img6.acsta.net/pictures/20/05/08/20/43/3400430.jpg', link: 'https://tinyurl.com/3e8z4rvr' },
    // { name: 'Mankarathe', image: 'https://wallpapercave.com/wp/wp7501819.jpg', link: 'https://tinyurl.com/bdfzs46y' },
   // { name: 'RajiniMurugan', image: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/54ea49e8c68cb4efd2200aa4ede5ae8e32098a643d61e072be278ba745dbe963._RI_V_TTW_.jpg', link: 'https://tinyurl.com/yc52yfmk' },

     
    ],
  },

  {
    name: 'Dubbed Movies',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkn91GpNi88CicRs375878Z6hZWXOpU4gvg&s',shows:[
      {name:'Bagheera',image:'https://multicinema.in/assets1/2021MoviesPoster/Bagheera.jpg',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Bagheera.mp4'},
      {name:"ARM",image:"https://multicinema.in/assets1/2021MoviesPoster/ARM.jpg",link:"https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/ARM.mp4"},
      { name: 'Devara', image: 'https://cdn.gulte.com/wp-content/uploads/2024/01/Devara-scaled.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Devara.mp4' },
      {name:'Pushpa',image:'https://multicinema.in/assets1/2021MoviesPoster/Pushpa.jpg',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Pushpa.mp4'},
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
    name:'Vijay',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3itqcYZ6XyELlJRCxyLNQ8XmMCOoE17dRQA&s',shows:[
      {
      {name:'Thuppakki',image:'https://cinemachaat.com/wp-content/uploads/2013/05/thuppakki.jpg',link:'https://b6.openfile.online/downloads/in6CH1aEhyONhUqgnK1L7g/1733712646/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Thuppakki%20(2012)/Thuppakki%20Mp4%20HD/Thuppakki%20HD.mp4'},
      {name:'Kuruvi',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVYKAYcuVsiQYObiQNyzn5f3D27N0uEBjfQ&s',link:'https://b6.openfile.online/downloads/nKXbUOQSlbJXZCT9qHt3hg/1733740900/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Kuruvi%20(2008)/Kuruvi%20Mp4%20HD/Kuruvi%20HD.mp4'},
      {name:'Kushi',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVMNYFcA64Q8Ea8BW5r2tXgX6iA731-ITZ75EODBVa_gVAqRM3gBdkLCKXaRLGm6DnCE&usqp=CAU',link:'https://b6.openfile.online/downloads/tA2J2htFq9CZegkEGFKNSg/1733741020/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Kushi%20(2000)/Kushi%20Mp4%20HD/Kushi%20HD.mp4'},
      {name:'Sura',image:'https://www.tamil2lyrics.com/wp-content/uploads/2017/04/sura-movie.jpg',link:'https://b6.openfile.online/downloads/aIfF7nQOtydNdM7VO4aAmg/1733712220/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Sura%20(2010)/Sura%20Mp4%20HD/Sura%20HD.mp4'},
      {name:'Madurey',image:'data:image/jpeg;base64,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',link:'https://b6.openfile.online/downloads/dTlzk4heZZDKzx2NSum8Hw/1733797565/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Madurey%20(2004)/Madurey%20Mp4%20HD/Madurey%20HD.mp4'},
      {name:'Sivakasi',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6k5Pl3wj8mUeNkFxy6yGDjMyi3_sPXEvgXQ&s',link:'https://b6.openfile.online/downloads/VPyz9iBCuCqtIC8ComrrZA/1733712102/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Sivakaasi%20(2005)/Sivakaasi%20Mp4%20HD/Sivakaasi%20HD.mp4'},
      {name:'Kadhalukku Mariyadhai',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLjF_8qxKu436rdMvpguh0PMWHgS6mXQpSw&s',link:'https://b6.openfile.online/downloads/huYh6q0DCoyisXYr0LfLLQ/1733740755/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Kadhalukku%20Mariyadhai%20(1997)/Kadhalukku%20Mariyadhai%20Mp4%20HD/Kadhalukku%20Mariyadhai%20HD.mp4'},
      {name:'Sachein',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnZXRRguUJMKuOOBTP6mVJfyHUcXHkGy3TA&s',link:'https://b6.openfile.online/downloads/He6X_OBuZaUkybcDOtw6mw/1733711863/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Sachein%20(2005)/Sachein%20Mp4%20HD/Sachein%20HD.mp4'},
      {name:'Love Today',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRMUikxUjDEpFYrv5IX6k0u6Y1kxz8IoVpV_CWxeDN8SbsVIEknr0Ygak&s',link:'https://b6.openfile.online/downloads/4V3SkEU0ul0qgNXFI5xkog/1733741124/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Love%20Today%20(1997)/Love%20Today%20Mp4%20HD/Love%20Today%20HD.mp4'},
      {name:'Thirumalai',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpssionbJhQCYoeLMVNBAHSbZ6VYyMA6eIBQ&s',link:'https://b6.openfile.online/downloads/LdOaOO2CqT0_2t1MExnMSg/1733712386/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Thirumalai%20(2003)/Thirumalai%20Mp4%20HD/Thirumalai%20HD.mp4'},
      {name:'Thirupaachi',image:'https://m.media-amazon.com/images/M/MV5BMTI3NzkwYzEtYmVjZi00ODI0LWE0OGQtYzZmMzg1ODc5Y2NhXkEyXkFqcGc@._V1_.jpg',link:'https://b6.openfile.online/downloads/--VK8rQcNOHrkpmzDIvEFQ/1733712521/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Thirupaachi%20(2005)/Thirupaachi%20Mp4%20HD/Thirupaachi%20HD.mp4'},
      {name:'Shajahan',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0-PlAikrQitS59OAZFeTIS9UokMmo1wSwQ&s',link:'https://b6.openfile.online/downloads/iexp0yr2-3BYw82YHM_UDA/1733711986/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Shajahan%20(2001)/Shajahan%20Mp4%20HD/Shajahan%20HD.mp4'},
      {name:'Maanbumigu Maanavan',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32sN1eJ4mA-QaWyshQ0M4swek7BkvnfduGA&s',link:'https://b6.openfile.online/downloads/aMzYIqaSjgEUeKJcyMqhgA/1733797485/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Maanbumigu%20Maanavan%20(1996)/Maanbumigu%20Maanavan%20Mp4%20HD/Maanbumigu%20Maanavan%20HD.mp4'},
      {name:'Thulladha Manamum Thullum',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs9LfC1xF1zTBaoEwte4Oisif4JQB0RaXzCw&s',link:'https://b6.openfile.online/downloads/i6wmew_fY5YkvmhUiWufAw/1733710194/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Thulladha%20Manamum%20Thullum%20(1999)/Thulladha%20Manamum%20Thullum%20Mp4%20HD/Thulladha%20Manamum%20Thullum%20HD.mp4'},
      {name:'Selva',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxSSAZRrL8jtxB0RPTsLDiNwMLvHRs01F-FA&s',link:'https://b6.openfile.online/downloads/gK_V7V8SG4Ylsz-ho73kHg/1733711251/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Selva%20(1996)/Selva%20Mp4%20HD/Selva%20HD.mp4'},
      {name:"Rajavin Parvayile",image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxdvn_JjgdNAivhmXEgBgi_CCmDYRTz8LNuA&s',link:'https://b6.openfile.online/downloads/CFOgzFVOcbUVYZ1WnVSzkQ/1733711006/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Rajavin%20Parvayile%20(1995)/Rajavin%20Parvayile%20Mp4%20HD/Rajavin%20Parvayile%20HD.mp4'},
      {name:'Rasigan',image:'https://a10.gaanacdn.com/gn_img/albums/DwPKOkBKqV/PKOxN0pj3q/size_m.jpg',link:'https://b6.openfile.online/downloads/genIRiqLG8vVIZll7i0Urw/1733710835/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Rasigan%20(1994)/Rasigan%20Mp4%20HD/Rasigan%20HD.mp4'},
      {name:'Senthoora Pandi',image:'https://upload.wikimedia.org/wikipedia/en/2/26/Senthoorapandi_poster.jpg',link:'https://b6.openfile.online/downloads/6fI-x3q6b67cXyXsz-oW9A/1733710651/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Sendhoora%20Pandi%20(1993)/Sendhoora%20Pandi%20Mp4%20HD/Sendhoora%20Pandi%20HD.mp4'},
      
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

  {name:'Marvel',image:'https://pbs.twimg.com/profile_images/1837996521809211392/ZPfq2KOE_400x400.jpg',shows:[
     

  {name: 'Deadpool & Wolverine', image: 'https://images.moviesanywhere.com/b50aa533f5b431b818fa18bb7aa298eb/0f6ef9a6-23e6-47f7-b1ac-08e755eaf26a.webp?h=375&resize=fit&w=250', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/DW.mp4'},
  {name: 'The Marvels', image: 'https://images.moviesanywhere.com/91c9dd5bf3087f966d0a60f709a8b09e/d22b7140-046b-42cc-81a9-b760160eb5ff.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/f7rjkupkzb9f'},
  {name: 'Vol 3', image: 'https://images.moviesanywhere.com/e5158b7036cb6fb709889600f78f25e2/4a2b9db6-f8d7-47df-a6d3-9a093e6791a1.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/j9foqkpprqia'},
  {name: 'Quantumania', image: 'https://images.moviesanywhere.com/91f18a89a01c903e7af188e9911f9c6e/7bce707a-684d-4c39-b125-3bbf2ff2412d.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/gm8q6bsyww1q'},
  {name: 'Wakanda', image: 'https://images.moviesanywhere.com/19451f09463b439a7ec9937a29c37064/8b82ebaf-750d-4589-9425-e9726ee2a371.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/o6wvodkmxofu'},
  {name: 'Multiverse', image: 'https://images.moviesanywhere.com/f9294f39c310425bc52732ae490549b4/9812ca94-e25f-46ee-9874-090857eb0ab7.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/tplwhvs7zcvs'},
  {name: 'No Way Home', image: 'https://images.moviesanywhere.com/5a7e82e7749d6dd8e447fcfeec50c064/55462afc-41ad-4322-ad46-1caca29fcc36.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/trxzdgnocpfc'},
  {name: 'Eternals', image: 'https://images.moviesanywhere.com/acdd3c73c67d756fb920845ad7c88c8f/eb62e721-3ce3-4ec0-b44c-1bd8bc073d87.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/tvnrxyfsqthz'},
  {name: 'Shang-Chi', image: 'https://images.moviesanywhere.com/0c8c13d8b3f28e4e25192d4dc8364de2/014180d5-8ebb-4ec6-a84e-9332f9b4ec06.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/doprxq3kcljs'},
  {name: 'Black Widow', image: 'https://images.moviesanywhere.com/ad9231fa430a47863531781333c6bb9f/b35f1409-eb17-4a81-985a-1fde3a087613.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/lzsefzdajeyp'},
  {name: 'Far From Home', image: 'https://images.moviesanywhere.com/d280caf10458b1f6e476a2f9c2f7ae84/3bc8112b-904d-432a-9ba3-bd3dd85a381b.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/ji4dlei5nqie'},
  {name: 'Endgame', image: 'https://images.moviesanywhere.com/4677177f6f0595289bc3e767e7b47459/1d6c6c73-ab1e-4453-969c-6a4e965ebb37.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/vnw_9o9a6cuc'},
  {name: 'Captain Marvel', image: 'https://images.moviesanywhere.com/f6254a2654d750658f8df42332a5ce24/a30837cb-1bac-4a04-8603-f224fab8f480.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/vqsuismfbieb'},
  {name: 'Ant-Man and Wasp', image: 'https://images.moviesanywhere.com/8f27781bd34070cf52f5a18bdc1a820c/5bff2157-7614-4183-a4a7-b9d14d3f9c9c.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/ewggl-hp82hm'},
  {name: 'Infinity War', image: 'https://images.moviesanywhere.com/0473778fb19af5e749f06d249804ba13/887b650e-5661-4fd7-aa24-bf38179342a5.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/pjiu969tosyh'},
  {name: 'Black Panther', image: 'https://images.moviesanywhere.com/3d3fd427d5b3a362e024933dbc203623/c37386d4-b7c2-49c9-b487-2ba6c0ec5879.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/3rm2oaumilpd'},
  {name: 'Ragnarok', image: 'https://images.moviesanywhere.com/9b8962dc632962d879eb5f1e91fd75f7/cf721a74-d1f5-476c-95be-c443efe9a690.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/_et5_tm8tidg'},
  {name: 'Homecoming', image: 'https://images.moviesanywhere.com/a96502b00a5e01ea17843dd02475caf0/6a605404-34c0-46c9-a9f9-29ee2d9e2303.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/atyqyyp8b7n9'},
  {name: 'Vol 2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQjU2jc21mmARPK2MVV8HMucRL5cOs1SnsOw&usqp=CAU', link: 'https://tsneh.vercel.app/nlvwij3cyjpp'},
  {name: 'Doctor Strange', image: 'https://images.moviesanywhere.com/367e2c03ac2d0c9224edc86e8aa40c93/e2ec6244-9355-448f-baed-8e937ba8685e.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/vn26sfrx40fx'},
  {name: 'Civil War', image: 'https://images.moviesanywhere.com/c6df1e5e0af0b0f6dc0af00fa54384fb/97bb58ff-b746-42f5-a61d-beb013a488e4.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/cdwx36piovxv'},
  {name: 'Ant-Man', image: 'https://images.moviesanywhere.com/13421a5712257645b569175472983f39/7964cad0-bccf-4d88-8d4c-3dae3301de2b.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/7rfxulhvf6h9'},
  {name: 'Age of Ultron', image: 'https://images.moviesanywhere.com/40b00f447b110238502723e4670df992/3b4c0c8c-2b01-4f0f-af09-98faf6e7bb0c.webp?h=375&resize=fit&w=250', link: 'https://dls4.mrfooll.xyz/2907705/12+Avengers+Age+of+Ultron+%282015%29+720p+BDRip+%5BTam%2BMulti%5D+.mkv?hash=AgADGw'},
  {name: 'Vol 1', image: 'https://images.moviesanywhere.com/959ef1bcb5c9a8e31e384f8d20384efa/7b57798c-b6d2-4b46-8487-bc0ca59934ec.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/bfikmy__bbbq'},
  {name: 'Winter Soldier', image: 'https://images.moviesanywhere.com/2cde825213e154ea76959084c78d026c/d1a27851-992c-4cd2-bf10-2228a8a77d8f.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/1yr42dwpdgqf'},
  {name: 'Dark World', image: 'https://images.moviesanywhere.com/e2c77d0d2602acdc3cd56ff55ff4949c/f8e80326-7237-4ffb-9f54-d6504c5f9e32.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/6zr66k9j2j8l'},
  {name: 'Iron Man 3', image: 'https://images.moviesanywhere.com/9e6a7d319487c4ef58543298ffdc2fb9/9cac9d6f-a5f5-4e3b-91b5-8ad8d538fbb4.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/b8t5xrxx6ywx'},
  {name: 'Avengers', image: 'https://images.moviesanywhere.com/a36700f2ab20c7d495566843eea79dde/745c9b06-af55-4510-836d-9a320a3f26f9.webp?h=375&resize=fit&w=250', link: 'https://dls4.mrfooll.xyz/AgADIQ2907637'},
  {name: 'First Avenger', image: 'https://images.moviesanywhere.com/fa9e94046ada1dba2df65ec7c328ec2a/f7455d8d-9288-4bd5-a283-586b8b4abe93.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/lvygketr67si'},
  {name: 'Thor', image: 'https://images.moviesanywhere.com/d2c6e9c510b22933e69ca30f8ec6f5a3/4e9d04e3-787e-41bf-aaaf-98a78d5c9f9d.webp?h=375&resize=fit&w=250', link: 'https://dls4.mrfooll.xyz/AgADEA2907626'},
  {name: 'Iron Man 2', image: 'https://images.moviesanywhere.com/f63168b72788f0d189548e7130d3ffac/78720b79-de19-4d10-b80b-1172b068328a.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/djhcyub2nsbq'},
  {name: 'Incredible Hulk', image: 'https://images.moviesanywhere.com/af98bdeec9e6b9ea7ed3720e25429b29/865d13d3-da63-4174-ad69-e1fdd446de82.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/szr38isis7an'},
  {name: 'Iron Man', image: 'https://images.moviesanywhere.com/45589cb573be13bb984b078ed3e1cf9e/a0652686-b625-4b41-bdf1-f32c3d9471a6.webp?h=375&resize=fit&w=250', link: 'https://tsneh.vercel.app/66czfsv5qcrf'},    
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
      {name:'2021',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0PDsytA8OtOq6eW88VNu3_fEvUjaql3TiIMDhZ67rF-MtgXHiISC1yyt4&s=10',link:'https://tsneh.vercel.app/trxzdgnocpfc'}, 
    ],
  },

    {
    name:"Toy Story",image:"https://image.tmdb.org/t/p/original/dSr82KHmtgiWaMYx53QgtxQmbCw.jpg",shows:[
      {name:"Toy Story 1",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnCdlRuLP67KQNBnZHm9eJaOqSPpBdSHfGtQ&s",link:"https://d5.uptocdn.com/dl/OnL0-13oIjDriY3tuNsULQ/1732070509/p/Tamil%20Dubbed%20Collections/Toy%20Story%20Trilogy%20Collections/Toy%20Story%201%20(1995)/Mp4%20HD%20(640x360)/Toy%20Story%201%20(1995)%20HD%20(640x360).mp4"},
      {name:"Toy Story 2",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7UnVe5koWHuUSa4XRH482AvGCtWFoDEQbRw&s",link:"https://d5.uptocdn.com/dl/9YuSTwe9NyXT1u5tJ5MApQ/1732070940/p/Tamil%20Dubbed%20Collections/Toy%20Story%20Trilogy%20Collections/Toy%20Story%202%20(1999)/Mp4%20HD%20(640x360)/Toy%20Story%202%20(1999)%20HD%20(640x360).mp4"},
      {name:"Toy Story 3",image:"https://m.media-amazon.com/images/I/81DOyQ93xmL._AC_UF1000,1000_QL80_.jpg",link:"https://d5.uptocdn.com/dl/mhyCWwH7wzHlA0LvhvUD4A/1732070972/p/Tamil%20Dubbed%20Collections/Toy%20Story%20Trilogy%20Collections/Toy%20Story%203%20(2010)/Mp4%20HD%20(640x360)/Toy%20Story%203%20(2010)%20HD%20(640x360).mp4"},
    ],
  },

  {name:'Pirates Of Carribbean',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQxlZ783CdiGRVnsfalMn0ry2xTGO849fJyMoIPTahQXO_Dt4TE88eGNKn&s=10',shows:[
       {name:'2003',image:'https://resizing.flixster.com/knmVWU12rMWrg5Ey8C1CDYzafwQ=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p32093_p_v8_bd.jpg',link:'https://tsneh.vercel.app/s5ccpciewuqc'},
       {name:'2006',image:'https://resizing.flixster.com/53B9VUV-d33Gpd1MQ-Z13pU-NO0=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p159655_p_v8_av.jpg',link:'https://tsneh.vercel.app/cf372xclyh_9'},
       {name:'2007',image:'https://resizing.flixster.com/bSbueV2BY6YJaXdMSWHp5YT76zY=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p164907_p_v8_ar.jpg',link:'https://tsneh.vercel.app/czxfzfx3zxlk'},
       {name:'2011',image:'https://resizing.flixster.com/70Wi90wBz9wnDa2rCcluDXfo2Y0=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7989366_p_v8_ab.jpg',link:'https://tsneh.vercel.app/ga6hj_c7arws'},  
       {name:'2017',image:'https://resizing.flixster.com/c7mdkt7_KRwsuPVo7PilGSWPbg4=/fit-in/180x240/v2/https://resizing.flixster.com/pcRcLIYOuKQbSPZFVa-L5ldoHow=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2RkMzA5NDgxLWM3YzEtNDk0ZS1hMTY0LTRjMzBlMmQyYjQ1NC53ZWJw',link:'https://tsneh.vercel.app/fxz4xfi0zmqr'},
    ],   
  },
    {
      name:'Ice Age',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc88bN5HdY2lN33ACqftB2WrjIWljMmV7Jnfdo7jbDWK_h0XGI74uM730&s=10',shows:[
      {name:'2002',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSRM9pR8nUIbwfsoZ7Fhj1qwKeN6_W_waukq3QEa7Zh5osTGLpSvsOnhGg&s=10',link:'https://tsneh.vercel.app/l_vxz0-nxbwf'},
      {name:'2006',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ15lnTRl368qxagDbJyL8osU8kTm0wOiHyckb_0t5UCHd4_Yx5-hU2Rlg&s=10',link:'https://tsneh.vercel.app/n0ljke8pdwcv'},
      {name:'2009',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT23BpZHJBk-Fv-vTkjg7wo2mLpXGqw4WTlk7ZKoOfDzsUbVIn6gW7tXJGB&s=10',link:'https://tsneh.vercel.app/0ld_kiyzocuk'},
      {name:'2012',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMzCLz--aIbtMDDbBpfFea1AGNWcIEtTN_-7Zec0Haxy-sOqtN0XHgQOM&s=10',link:'https://tsneh.vercel.app/1bape2kfuxt1'},
      {name:'2016',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMVnDLmDYcdHmw9b1c8_Li9mhzy1yTOr-0G9g0r5lBJdxjuGLr3BIjuOhv&s=10',link:'https://tsneh.vercel.app/900bw5_waotu'},
      {name:'2021',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7hs5oKEHt_GOOH6xeuR2oevwjzXf2Xl1sHxz9PED_sUagt6Ku8SCsyio&s=10',link:'https://tsneh.vercel.app/sgvo5w7dwt_1'},
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
    setThumbnail(video.image); // Set the video thumbnail
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
