import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './live.css';
import './album.css';

//
const shows = [
{
    name: 'Theatre Print',
    image: 'https://media.istockphoto.com/id/1494642262/photo/people-in-the-cinema-auditorium-with-empty-white-screen.jpg?s=2048x2048&w=is&k=20&c=XLSiHIO02doIcuaB8BJMTcoTsyeQtvbngcQlQZLkEW4=',
    shows: [
        {name:'Vanangan',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWLRwf4wNzWB6EaievUesfVk75IZKVsDHXIg&usqp=CAU', link:'https://dls3.mrfooll.xyz/AgADhx3340181'},
    {name:'Game Changer',image:'https://assetscdn1.paytm.com/images/cinema/WhatsApp%20Image%202025-01-06%20at%2013.39.30-ad954b40-cc05-11ef-912e-2154ccd78c0a.jpeg',link:'https://dls4.mrfooll.xyz/AgAD7R3315981'},
      {name:'Idendity', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIZIoLqoHAbhvmlxriYO4QWJVCHlEX8I5zVpCTHGXx7JLMbgK_v2yyK0mO&s=10',link:'https://dl8.hotshare.online/Identity_2025_PreDVD_720p_HD.mp4'},
      {name:'See Saw',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4wpEJDzI-yrTc-9oRK7aZnsR9yJVeoIqTkuHBluGXQtvZGRdUxiHMh8&s=10',link:'https://dl2.hotshare.click/Seesaw_2025_PreDVD_720p_HD.mp4'},
      {name:'Xtreme',image:'https://in.bmscdn.com/events/moviecard/ET00422598.jpg',link:'https://s04.hotshare.link/Xtreme_2025_PreDVD_720p_HD.mp4'},
      {name:'Rajakili',image:'https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/rajakili-et00426302-1735196713.jpg',link:'https://s05.hotshare.link/Alangu_2024_PreDVD_720p_HD.mp4'},
      {name:'Smile Man',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT84db2w2b2wlqdeZnOqnkudhUcJ_imBfufJydGYUQp6W_9yGzCH4ST2IE&s=10',link:'https://dl8.hotshare.click/The_Smile_Man_2024_PreDVD_720p_HD.mp4'},
      {name:'Thirumanickam',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qQj_kv4bGy8bGzfiSNGwzTKkq40phMx4GcZyu9Z4UNGYFf8yGHFPqQOX&s=10',link:'https://s02.hotshare.link/Thiru_Manickam_2024_PreDVD_720p_HD.mp4'},
      {name:'Alangu',image:'https://assets-in.bmscdn.com/discovery-catalog/events/et00423853-zxtespsxdv-landscape.jpg',link:'https://dl9.hotshare.click/Alangu_2024_PreDVD_720p_HD.mp4'},
    ],
  },

  {
    name: 'HD Movies',
    image: 'https://play-lh.googleusercontent.com/5lGwoUsh5Z1eopCpGQIQjfoGqUHTJU_tAXNkdm1eiBVGGKoXqk5jX8Vm7DiAn42Lwbk6',
    shows: [
      {name:'Viduthalai 2', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX7lrsHalT6c2XvmrNbOO3a3f0YFbKbpT5JEGyR1C00KhvdEShO9diMbw&s=10',link:'https://dl3.hotshare.online/Moviesda.Mobi_-_Viduthalai_Part_2_2024_HDRip_1080p_HD.mp4'}, 
       {name:'Miss You', image:'https://m.media-amazon.com/images/M/MV5BZjFlOTg1MDUtYTMwOS00MDBlLWE4ZjAtZjAzZWJjYzEyZWNjXkEyXkFqcGc@._V1_.jpg',link:'-tbn0.gstatic.com/images?q=tbn:ANd9GcQULrTu7hLs5ggDAet-gSB2-ujfUA4nqb1U40cpUO0qihy1Cliz4HufKAHM&s=10',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Miss_You.mp4'}, 
      {name:'Soodhu Kavvum 2',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF5A5s85hmdSY-b3Wfd_nR4O7jUHobQy3uBGiESgEFmmljs5hjU7buCWmz&s=10',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Soodhu_Kavvum_2.mp4'},
      {name:'Sorgavasal',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCC9jidQLJVO793u5iJCAX7nH26bWwKynS9XfF5GJRYdvJGU6qz2qkJcM&s=10',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Sorgavaasal.mp4'}, 
      {name:'SIR', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtRVLhfpC7jveOTXFVu0sG1Tt-dAfUIoA08ytB-VbIw&s',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Sir.mp4'},
      { name:'Kanguva',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwqsHIIojmSJFVRY9gQlbY6NaQDNaUsu-b90mfCkI0PJHxf5nJzCJ-m0&s=10',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Kanguva.mp4'},
      {name:'Jolly O Gymkhana',image:'https://assetscdn1.paytm.com/images/cinema/Jolly-O-Gymkhana--6baf0b40-a3fa-11ef-b945-57c02e367648.jpg',link:'https://s02.hotshare.link/Moviesda.Mobi_-_Jolly_O_Gymkhana_2024_Original_1080p_HD.mp4'},
      {name:'Emakku Thozhil Romance',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf8wO5oNbp6PVgLRJw87MPqQZQtP326ngzfs-MEpoAXdOzbHVAg90RMIx_&s=10',link:'https://tinyurl.com/yf4pdm95'},
      {name:'Nirangal Moondru',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLGuxpGEgPwy98GvUvxfCM91UanD3UG0uvdFp1ncsrwCoCl1mEpABu-Bmn&s=10',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Nirangal_Moondru.mp4'},
      {name:'Lucky Baskhar',image:'https://tsneh.vercel.app/huef1u-3-e0p',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Lucky_Baskhar.mp4'},
      {name:'Line Man',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4VYdC7jlraoiMX7Dg3EpV8AKv3dMduTHTBo3Dg68X5lJRbsjEfLe6rjSj&s=10',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Lineman.mp4'},
    { name:'Amaran',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzugiP-FGYgjDvKH0orm9a3csrkqljfNSwqVBS9yIeVA3_2EUNNAizHBMD&s=10',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Amaran.mp4'},
   { name:'Bloody Beggar',image:'https://upload.wikimedia.org/wikipedia/en/4/40/Bloody_Beggar.jpg',link:'https://cdn.boostpng.com/Bloody_Beggar_(2024)_Tamil_1080p.mkv'},
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
    { name: 'Takkar', image: 'https://multicinema.in/assets1/2021MoviesPoster/Takkar.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Takkar.mp4' },
    { name: 'PS 2', image: 'https://multicinema.in/assets1/2021MoviesPoster/Ponniyin_Selvan_2.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Ponniyin_Selvan_2.mp4' },
    { name: 'Aug 16 1947', image: 'https://multicinema.in/assets1/2021MoviesPoster/August_16,_1947.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/August_16,_1947.mp4' },
    { name: 'Rudhran', image: 'https://multicinema.in/assets1/2021MoviesPoster/Rudhran.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Rudhran.mp4' },
    { name: 'Indian 2', image: 'https://tse3.mm.bing.net/th?id=OIP.Ua5_ZEp9dPl7t0MfPJHWEAHaJx&pid=Api&P=0&h=220', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Indian_2.mp4' },
    ],
  },

  {
    name: 'Dubbed Movies',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkn91GpNi88CicRs375878Z6hZWXOpU4gvg&s',shows:[
      {name:'Baroz',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrCNfQUAEl91jWxWO1DzCkv3f6lllt5f1Uog&usqp=CAU',link:'https://dls4.mrfooll.xyz/AgADzx3251623'},{name:'Mufasa',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yJpaTrFzHuiFC7L2wTo9C6-kzlDRFqNGAn5PuBYx5qkpNBq805GWRbUE&s=10',link:'https://s02.dubshare.one/Mufasa_The_Lion_King_2024_HDRip_720p_HD.mp4'},{name:'Pushpa 2',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTheRlM_HeB2-5rRx8YV3zDdGWpelHHHX3XLbdsl62EUI5eszSjUKkHq61k&s=10',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Pushpa_2.mp4'},{name:'Karataka Damanaka',image:'https://multicinema.in/assets1/2021MoviesPoster/Karataka_Damanaka.jpg',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Karataka_Damanaka.mp4'},{name:'Bagheera',image:'https://multicinema.in/assets1/2021MoviesPoster/Bagheera.jpg',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Bagheera.mp4'},{name:"ARM",image:"https://multicinema.in/assets1/2021MoviesPoster/ARM.jpg",link:"https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/ARM.mp4"},{ name: 'Devara', image: 'https://cdn.gulte.com/wp-content/uploads/2024/01/Devara-scaled.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Devara.mp4' },{name:'Pushpa',image:'https://multicinema.in/assets1/2021MoviesPoster/Pushpa.jpg',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Pushpa.mp4'},{ name: 'Adipurush', image: 'https://multicinema.in/assets1/2021MoviesPoster/Adipurush.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Adipurush.mp4' },{name:"Turbo",image:"https://multicinema.in/assets1/2021MoviesPoster/Turbo.jpg",link:"https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Turbo.mp4"},{name:"Aavesham",image:"https://multicinema.in/assets1/2021MoviesPoster/Aavesham.jpg",link:"https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Aavesham.mp4"},{name:"Chotta Bheem",image:"https://multicinema.in/assets1/2021MoviesPoster/Chhota_Bheem_and_the_Curse_of_Damyaan.jpg",link:"https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Chhota_Bheem_and_the_Curse_of_Damyaan.mp4"},{name:"Goat Life",image:"https://multicinema.in/assets1/2021MoviesPoster/Aadujeevitham_The_Goat_Life.jpg",link:"https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Aadujeevitham_The_Goat_Life.mp4"},{name:'Suryas Saturday',image:'https://multicinema.in/assets1/2021MoviesPoster/Suryas_Saturday.jpg',link:'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Suryas_Saturday.mp4'},{ name: 'Manjummel Boys', image: 'https://tinyurl.com/2nn9eydy', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Manjummel_Boys.mp4' },{ name: 'Premalu', image: 'https://tinyurl.com/yn5t9a9p', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Premalu.mp4' },{ name: 'Family Star', image: 'https://multicinema.in/assets1/2021MoviesPoster/The_Family_Star.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/The_Family_Star.mp4' },{ name: '12th Fail', image: 'https://multicinema.in/assets1/2021MoviesPoster/12th_Fail.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/12th_Fail.mp4' },{ name: 'Avatar 2', image: 'https://multicinema.in/assets1/2021MoviesPoster/Avatar_2.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Avatar_2.mp4' },],
  },
    /* {
    name:'Vijay',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3itqcYZ6XyELlJRCxyLNQ8XmMCOoE17dRQA&s',shows:[
      {name:'Theri',image:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcStWCQF-J2UddArBRO3Pw03SSDBnsGRmVb_-1XbVf277EKD5gA7vN7fWeWOUKkO6L403gAy',link:'https://b6.openfile.online/downloads/KjNmUxcpRF6gDp5NyHZi3w/1733801231/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Theri%20(2016)/Theri/Theri%20(2016)%20Single%20Part%20(640x360).mp4'},{name:'Thuppakki',image:'https://cinemachaat.com/wp-content/uploads/2013/05/thuppakki.jpg',link:'https://b6.openfile.online/downloads/in6CH1aEhyONhUqgnK1L7g/1733712646/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Thuppakki%20(2012)/Thuppakki%20Mp4%20HD/Thuppakki%20HD.mp4'},{name:'Nanban',image:'https://i.scdn.co/image/ab67616d00001e02a077a1d08548c2b716e5a307',link:'https://b6.openfile.online/downloads/wmR3M9VnMj2J8czk9IbUOg/1733798280/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Nanban%20(2012)/Nanban%20Mp4%20HD/Nanban%20HD.mp4'},{name:'Kuruvi',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVYKAYcuVsiQYObiQNyzn5f3D27N0uEBjfQ&s',link:'https://b6.openfile.online/downloads/nKXbUOQSlbJXZCT9qHt3hg/1733740900/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Kuruvi%20(2008)/Kuruvi%20Mp4%20HD/Kuruvi%20HD.mp4'},{name:'Pokkiri',image:'https://static.toiimg.com/photo/msid-61303427/61303427.jpg?150983',link:'https://b6.openfile.online/downloads/7KMvDZIHDeUhR3qhWeC1gg/1733798592/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Pokkiri%20(2007)/Pokkiri%20Mp4%20HD/Pokkiri%20HD.mp4'},{name:'Kushi',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVMNYFcA64Q8Ea8BW5r2tXgX6iA731-ITZ75EODBVa_gVAqRM3gBdkLCKXaRLGm6DnCE&usqp=CAU',link:'https://b6.openfile.online/downloads/tA2J2htFq9CZegkEGFKNSg/1733741020/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Kushi%20(2000)/Kushi%20Mp4%20HD/Kushi%20HD.mp4'},{name:'Sura',image:'https://www.tamil2lyrics.com/wp-content/uploads/2017/04/sura-movie.jpg',link:'https://b6.openfile.online/downloads/aIfF7nQOtydNdM7VO4aAmg/1733712220/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Sura%20(2010)/Sura%20Mp4%20HD/Sura%20HD.mp4'},{name:'Madurey',image:'https://i.scdn.co/image/ab67616d0000b27310f5c0204040ceae6334f4c7',link:'https://b6.openfile.online/downloads/dTlzk4heZZDKzx2NSum8Hw/1733797565/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Madurey%20(2004)/Madurey%20Mp4%20HD/Madurey%20HD.mp4'},{name:'Sivakasi',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6k5Pl3wj8mUeNkFxy6yGDjMyi3_sPXEvgXQ&s',link:'https://b6.openfile.online/downloads/VPyz9iBCuCqtIC8ComrrZA/1733712102/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Sivakaasi%20(2005)/Sivakaasi%20Mp4%20HD/Sivakaasi%20HD.mp4'},{name:'Kadhalukku Mariyadhai',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLjF_8qxKu436rdMvpguh0PMWHgS6mXQpSw&s',link:'https://b6.openfile.online/downloads/huYh6q0DCoyisXYr0LfLLQ/1733740755/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Kadhalukku%20Mariyadhai%20(1997)/Kadhalukku%20Mariyadhai%20Mp4%20HD/Kadhalukku%20Mariyadhai%20HD.mp4'},{name:'Sachein',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnZXRRguUJMKuOOBTP6mVJfyHUcXHkGy3TA&s',link:'https://b6.openfile.online/downloads/He6X_OBuZaUkybcDOtw6mw/1733711863/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Sachein%20(2005)/Sachein%20Mp4%20HD/Sachein%20HD.mp4'},{name:'Love Today',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRMUikxUjDEpFYrv5IX6k0u6Y1kxz8IoVpV_CWxeDN8SbsVIEknr0Ygak&s',link:'https://b6.openfile.online/downloads/4V3SkEU0ul0qgNXFI5xkog/1733741124/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Love%20Today%20(1997)/Love%20Today%20Mp4%20HD/Love%20Today%20HD.mp4'},{name:'Thirumalai',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpssionbJhQCYoeLMVNBAHSbZ6VYyMA6eIBQ&s',link:'https://b6.openfile.online/downloads/LdOaOO2CqT0_2t1MExnMSg/1733712386/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Thirumalai%20(2003)/Thirumalai%20Mp4%20HD/Thirumalai%20HD.mp4'},{name:'Thirupaachi',image:'https://m.media-amazon.com/images/M/MV5BMTI3NzkwYzEtYmVjZi00ODI0LWE0OGQtYzZmMzg1ODc5Y2NhXkEyXkFqcGc@._V1_.jpg',link:'https://b6.openfile.online/downloads/--VK8rQcNOHrkpmzDIvEFQ/1733712521/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Thirupaachi%20(2005)/Thirupaachi%20Mp4%20HD/Thirupaachi%20HD.mp4'},{name:'Shajahan',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0-PlAikrQitS59OAZFeTIS9UokMmo1wSwQ&s',link:'https://b6.openfile.online/downloads/iexp0yr2-3BYw82YHM_UDA/1733711986/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Shajahan%20(2001)/Shajahan%20Mp4%20HD/Shajahan%20HD.mp4'},{name:'Maanbumigu Maanavan',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32sN1eJ4mA-QaWyshQ0M4swek7BkvnfduGA&s',link:'https://b6.openfile.online/downloads/aMzYIqaSjgEUeKJcyMqhgA/1733797485/d/%20Actor%20Hits%20Collection/Vijay%20%20Movies%20Collection/Maanbumigu%20Maanavan%20(1996)/Maanbumigu%20Maanavan%20Mp4%20HD/Maanbumigu%20Maanavan%20HD.mp4'},
  ],
  },

  {
    name:'Dhanush', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFwwag9imv4j2gQtPQp54rXjYPaV9bU6W7wBMxHZi_On7hTxVpa8I8NoI&s=10',shows:[
      {name:'3',image:'https://sund-images.sunnxt.com/6999/1920x1080_3_6999_a11b2242-46d7-4b23-b6b3-b5689b8ae5c7.jpg',link:'https://tinyurl.com/yrykzxam'},{name:'Aadukalam',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUMeEy6dczD1Y4KTXjRwrhwzVAhhmyItNC79M5AO0k-i3Hw6KWyn5PjT4&s=10',link:'https://tinyurl.com/murvy5dd'},{name:'Maryan',image:'https://upload.wikimedia.org/wikipedia/en/5/51/Maryan_Album_Art.jpeg',link:'https://tinyurl.com/bdf98up8'},{name:'Mayakkam Enna',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqtSi3tqR7u291wK548gYaLe_LoUU3hlOOAc0hzby5hrF6BZiqk48hEAg&s=10',link:'https://tinyurl.com/4p5jhj7s'},{name:'Padikathavan',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFj9PTgc7b6LkWudJgWAZCXMORVqRJQFYNO_8QvGtTpRt1hLG9AIKvxSk&s=10',link:'https://tinyurl.com/3cdwapdz'},{name:'Polladhavan',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYq8_5nOfnuEOCC7McLxajmv9W-QFkOA2RsuhJsi3FhH9KnvJwLM1lsQ&s=10',link:'https://tinyurl.com/2ud3v3fx'},
  ],
  },*/
  // {
  //   name: 'Harry Potter',
  //   image: 'https://i5.walmartimages.com/asr/11a9f800-47ff-4ba4-ac8d-43bd0be5c2e4.b86b11aa6cb832d3761845fe5b3076c1.jpeg',
  //   shows: [
  //       { name: "Sorcerer's Stone", image: "https://tinyurl.com/7j795tmh", link: "https://tsneh.vercel.app/75rhzaeeyk2t" },
  //       { name: "Chamber of Secrets", image: "https://tinyurl.com/bd4m5tk8", link: "https://tsneh.vercel.app/6ltfpkrebevz" },
  //       { name: "Prisoner of Azkaban", image: "https://tinyurl.com/5655uwsu", link: "https://tsneh.vercel.app/bysb4ed82sp6" },
  //       { name: "Goblet of Fire", image: "https://tinyurl.com/3a8fcukr", link: "https://tsneh.vercel.app/npjd3s7lan6m" },
  //       { name: "Order of the Phoenix", image: "https://tinyurl.com/2adn39xt", link: "https://tsneh.vercel.app/sgkjswsd-czh" },
  //       { name: "Half-Blood Prince", image: "https://tinyurl.com/4jm2nnch", link: "https://tsneh.vercel.app/h3rn3rjihw2n" },
  //       { name: "Deathly Hallows Part 1", image: "https://tinyurl.com/mw2v2kv7", link: "https://tsneh.vercel.app/c2yaskvyveig" },
  //       { name: "Deathly Hallows Part 2", image: "https://tinyurl.com/yjb7jhn4", link: "https://tsneh.vercel.app/vp9mkbibcn6q" },

  //   ],
  // },

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
