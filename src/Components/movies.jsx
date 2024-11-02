import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './live.css';
const channels = [
    { name:'Black',image:'https://tsneh.vercel.app/hxjklbeumamm',link:'https://tsneh.vercel.app/rjssmpdmdm3w'},
    { name:"Vettaiyan",image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULrTu7hLs5ggDAet-gSB2-ujfUA4nqb1U40cpUO0qihy1Cliz4HufKAHM&s=10',link:'https://tsneh.vercel.app/kybgedhlv-kv'},
    { name: 'Meiyazhagan', image: 'https://i.scdn.co/image/ab67616d0000b2737e86df2b3a35c59564738524', link: 'https://tsneh.vercel.app/dipgh4kwik1x' },
    { name: 'Petta Rap', image: 'https://m.media-amazon.com/images/M/MV5BZDZiNjRlOTQtNDBkNy00MDgxLTgxZDQtNTc5Zjg2NWM2NGZlXkEyXkFqcGc@._V1_QL75_UX218_.jpg', link: 'https://tsneh.vercel.app/7cs6axa16oef' },
    { name: 'Hitler', image: 'https://assets.gadgets360cdn.com/pricee/assets/product/202312/Hitler1_1703675553.jpg', link: 'https://tsneh.vercel.app/unaqmn-e4js1' },
    //{ name: 'Devar', image: 'https://cdn.gulte.com/wp-content/uploads/2024/01/Devara-scaled.jpg', link: 'https://jaws-stream.jiocloud.com/media/hls/MmFqYXdzLWpjMS1zMy1wZC1lbmM6NzVjODNiNTk0Njc5NDI0NDgxMTMyMTg1YzIxYTdiOGZfeHMubTN1OA==.m3u8?token=b3e63177d6f14d60af5206c0318faa71' },
    { name: 'KP chelladurai', image: 'https://m.media-amazon.com/images/M/MV5BN2JmODY2NDYtNDk0Zi00ZDM1LTlkYjktNDFkMmUzZDlmODA3XkEyXkFqcGc@._V1_.jpg', link: 'https://tsneh.vercel.app/dw2-1z35rqaq' },
    { name: 'tholar cheguevara', image: 'https://m.media-amazon.com/images/M/MV5BMjNkNWM4NDItZDBjNi00N2EzLTg4YmYtMTNkYzJlMjE3ZWRjXkEyXkFqcGc@._V1_.jpg', link: 'https://tsneh.vercel.app/vhy7_dipwhlz' },
    { name: 'Kadaisi Ulaga Por', image: 'https://m.media-amazon.com/images/M/MV5BODYzOGY4NmEtYjRiNi00OGI3LWE4MWItZWJlM2MwNDUwMDM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', link: 'https://tsneh.vercel.app/px0-mvie8xno' },
    { name: 'Nandhan', image: 'https://chennaivision.com/wp-content/uploads/2024/09/post-7.png', link: 'https://tsneh.vercel.app/vs1qmtmnxail' },
    { name: 'Lubber Pandhu', image: 'https://assetscdn1.paytm.com/images/cinema/_Lubber-Pandhu---Gallery-13cf1990-711b-11ef-a8ad-e19aad791794.jpg', link: 'https://tsneh.vercel.app/hxjklbeumamm' },
    { name: 'GOAT', image: 'https://images.news18.com/ibnlive/uploads/2024/06/fotojet-2024-06-22t145736.232-2024-06-713c0097066abbd6ee404f96ef27a872.jpg?impolicy=website&width=640&height=480', link: 'https://tsneh.vercel.app/pfwkbnrzhe2z' },
    { name: 'Vazhai', image: 'https://img1.imageride.net/images/2024/08/24/GNfbjytfJh4TYJb.jpg', link: 'https://tsneh.vercel.app/lngpnsrf9x76' },
    { name: 'Kotukali', image: 'https://img.imageride.net/images/2024/08/24/GNRGfbjF4hKN.jpg', link: 'https://tsneh.vercel.app/i7_7r8ly-x1s' },
    { name: 'Rayan', image: 'https://tse3.mm.bing.net/th?id=OIP._F_HPMCsDiSPVHXOwXUhKQAAAA&pid=Api&P=0&h=220', link: 'https://tinyurl.com/msa34fdf' },
    { name: 'Kalki', image: 'https://images.news18.com/ibnlive/uploads/2024/06/kalki-2898-ad-movie-first-review-2024-06-74247ab144a1de861d9e034bf27aa133.jpg', link: 'https://tinyurl.com/j2xy6r9c' },
    { name: 'Thangalan', image: 'https://multicinema.in/assets1/2021MoviesPoster/Thangalaan.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Thangalaan.mp4' },
    { name: 'Raghu Thatha', image: 'https://multicinema.in/assets1/2021MoviesPoster/Raghu_Thatha.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Raghu_Thatha.mp4' },
    { name: 'Demonty 2', image: 'https://images.ottplay.com/images/a-poster-of-demonte-colony-2-279-1691154610.jpeg?impolicy=ottplay-20210210&width=1200&height=675', link: 'https://herokustreamapiiiiiii-75c3359a5ad7.herokuapp.com/AgADex2484570' },
    { name: 'Andhagan', image: 'https://m.media-amazon.com/images/M/MV5BMWJjOGRmMWMtMDM0NC00NGVlLTk2NTMtZjU4NzdiNTQ2ZTkwXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_FMjpg_UX1000_.jpg', link: 'https://tinyurl.com/27zevw5k' },
    { name: 'Boat', image: 'https://www.infoflick.com/news_images/2024/08/boat1722676860.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Boat.mp4' },
    { name: 'NOVP', image: 'https://tse3.mm.bing.net/th?id=OIP.Ux9vQkIcDO89X6gVtKgGBAHaEc&pid=Api&P=0&h=220', link: 'https://tinyurl.com/uhnxcjc3' },
    { name: 'Vascodagama', image: 'https://tse4.mm.bing.net/th?id=OIP.nFmbqkM2XxKS-TDUWmez4gHaEc&pid=Api&P=0&h=220', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/VascoDaGama.mp4' },
    { name: 'MPM', image: 'https://images.filmibeat.com/img/popcorn/list_items/mazhai-pidikatha-manithan-20220615150237-406.jpg', link: 'https://tsneh.vercel.app/vr725mnzzbr7' },
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
    { name: 'Chutney Sambar', image: 'https://www.cinefry.co.in/wp-content/uploads/2024/07/Chutney-Sambar.webp', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Chutney_Sambar_S01_E01_06.mp4' },
    { name: 'Garudan', image: 'https://tse2.mm.bing.net/th?id=OIP._cE5MahbnwAc3goANzq3VgHaEK&pid=Api&P=0&h=220', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Garudan.mp4' },
    { name: 'Manjummel Boys', image: 'https://tinyurl.com/2nn9eydy', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Manjummel_Boys.mp4' },
    { name: 'Premalu', image: 'https://tinyurl.com/yn5t9a9p', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Premalu.mp4' },
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
    { name: 'Family Star', image: 'https://multicinema.in/assets1/2021MoviesPoster/The_Family_Star.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/The_Family_Star.mp4' },
    { name: 'J Baby', image: 'https://multicinema.in/assets1/2021MoviesPoster/J_Baby.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/J_Baby.mp4' },
    { name: '12th Fail', image: 'https://multicinema.in/assets1/2021MoviesPoster/12th_Fail.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/12th_Fail.mp4' },
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
    { name: 'Adipurush', image: 'https://multicinema.in/assets1/2021MoviesPoster/Adipurush.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Adipurush.mp4' },
    { name: 'Takkar', image: 'https://multicinema.in/assets1/2021MoviesPoster/Takkar.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Takkar.mp4' },
    { name: 'Avatar 2', image: 'https://multicinema.in/assets1/2021MoviesPoster/Avatar_2.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Avatar_2.mp4' },
    { name: 'PS 2', image: 'https://multicinema.in/assets1/2021MoviesPoster/Ponniyin_Selvan_2.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Ponniyin_Selvan_2.mp4' },
    { name: 'Aug 16 1947', image: 'https://multicinema.in/assets1/2021MoviesPoster/August_16,_1947.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/August_16,_1947.mp4' },
    { name: 'Rudhran', image: 'https://multicinema.in/assets1/2021MoviesPoster/Rudhran.jpg', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Rudhran.mp4' },
    { name: 'Indian', image: 'https://tse3.mm.bing.net/th?id=OIP.kIGZqDMSKxes8ZgTq5S4cwHaEK&pid=Api&P=0&h=220', link: 'https://tinyurl.com/bddjccbm' },
    { name: 'Indian 2', image: 'https://tse3.mm.bing.net/th?id=OIP.Ua5_ZEp9dPl7t0MfPJHWEAHaJx&pid=Api&P=0&h=220', link: 'https://tinyurl.com/fbfn4pv3' },
    { name: 'Gilli', image: 'https://tse1.mm.bing.net/th?id=OIP.9PcN-V68fxHcgzAD6m2KRgHaEK&pid=Api&P=0&h=220', link: 'https://tinyurl.com/3faf5733' },
    { name: 'Silunu oru kathal', image: 'https://tse2.mm.bing.net/th?id=OIP.tZC2NWAFN5eQPxmsq7k7VQHaHa&pid=Api&P=0&w=300&h=300', link: 'https://tinyurl.com/m24ykm8c' },
    { name: 'Singam', image: 'https://tse2.mm.bing.net/th?id=OIP.A8DeQzl3jEMO0CrxPkI0QgHaK9&pid=Api&P=0&h=220', link: 'https://tinyurl.com/rzr9cyyr' },
    { name: 'Singam 2', image: 'https://tse4.mm.bing.net/th?id=OIP.fwI3mpQ8MBt8c0WTwXrO1gHaLH&pid=Api&P=0&h=220', link: 'https://tinyurl.com/2f278ww5' },
    { name: 'Singam 3', image: 'https://static1.showtimes.com/poster/660x980/singam-3-149662.jpg', link: 'https://tinyurl.com/4purxjhh' },
    { name: 'Varanam Aayiram', image: 'https://tse4.mm.bing.net/th?id=OIP.D5omBps0JHW4awBpAFl2gQHaLH&pid=Api&P=0&h=220', link: 'https://tinyurl.com/yc6nkhwf' },
    { name: 'Managaram', image: 'https://fr.web.img6.acsta.net/pictures/20/05/08/20/43/3400430.jpg', link: 'https://tinyurl.com/3e8z4rvr' },
    { name: 'Mankarathe', image: 'https://wallpapercave.com/wp/wp7501819.jpg', link: 'https://tinyurl.com/bdfzs46y' },
    { name: 'RajiniMurugan', image: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/54ea49e8c68cb4efd2200aa4ede5ae8e32098a643d61e072be278ba745dbe963._RI_V_TTW_.jpg', link: 'https://tinyurl.com/yc52yfmk' },

];

const Movies = () => {
    const [currentChannel, setCurrentChannel] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleChannelClick = (link) => {
        setCurrentChannel(link);
    };

    const filteredChannels = channels.filter(channel =>
        channel.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1 className='sideheading'>Movies</h1>
            <input
                type="text"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='search-bar'
            />
            {currentChannel && (
                <div className="plr">
            <ReactPlayer
            url={currentChannel}
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
            <div id='channel-player' className='play'>
                {filteredChannels.map((channel, index) => (
                    <div 
                        key={index} 
                        className='son'
                        onClick={() => handleChannelClick(channel.link)}
                    >
                        <img src={channel.image} alt={channel.name} />
                        <p>{channel.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Movies;
