import React, { useState, useEffect } from 'react';
import Plyr from 'plyr';
import './live.css';
import './album.css';

const shows = [
  {
    name:'Season 3',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9WVfFrWMjrtoI6N4gmZlbf2Oseuu6bLUGafR7CR5NGap2_psoDh1rD5s&s=10',shows:[
      {name:'FINALE',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7384670.jpg',link:''},
      {name:'Day 104',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7369668.jpg',link:''},
      {name:'Day 103',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7369666.jpg',link:''},
      {name:'Day 102',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7369662.jpg',link:''},
      {name:'Day 101',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7369659.jpg',link:''},
      {name:'Day 100',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7369658.jpg',link:''},
      {name:'Day 99',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7361687.jpg',link:''},
      {name:'Day 98',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7361683.jpg',link:''},
      {name:'Day 97',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7361682.jpg',link:''},
      {name:'Day 96',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7361680.jpg',link:''},
      {name:'Day 95',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7361678.jpg',link:''},
      {name:'Day 94',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7360337.jpg',link:''},
      {name:'Day 93',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7360336.jpg',link:''},
      {name:'Day 92',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7360335.jpg',link:''},
      {name:'Day 91',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7360333.jpg',link:''},
      {name:'Day 90',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7360329.jpg',link:''},
      {name:'Day 89',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7354773.jpg',link:''},
      {name:'Day 88',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7354772.jpg',link:''},
      {name:'Day 87',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7354771.jpg',link:''},
      {name:'Day 86',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7354770.jpg',link:''},
      {name:'Day 85',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7347585.jpg',link:''},
      {name:'Day 84',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7347583.jpg',link:''},
      {name:'Day 83',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7345238.jpg',link:''},
      {name:'Day 82',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7345237.jpg',link:''},
      {name:'Day 81',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7345236.jpg',link:''},
      {name:'Day 80',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7345235.jpg',link:''},
      {name:'Day 79',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7345234.jpg',link:''},
      {name:'Day 78',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7345233.jpg',link:''},
      {name:'Day 77',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7338141.jpg',link:''},
      {name:'Day 76',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7336421.jpg',link:''},
      {name:'Day 75',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7334541.jpg',link:''},
      {name:'Day 74',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7333402.jpg',link:''},
      {name:'Day 73',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7332261.jpg',link:''},
      {name:'Day 72',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7331163.jpg',link:''},
      {name:'Day 71',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7331161.jpg',link:''},
      {name:'Day 70',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7331156.jpg',link:''},
      {name:'Day 69',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7331155.jpg',link:''},
      {name:'Day 68',img:'https://images.plex.tv/photo?size=small-120&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7327428.jpg',link:''},
      {name:'Day 67',img:'https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7327427.jpg',link:''},
      {name:'Day 66',img:'https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7327425.jpg',link:''},
      {name:'Day 65',img:'https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7323683.jpg',link:''},
      {name:'Day 64',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7323682.jpg',link:''},
      {name:'Day 63',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7323681.jpg',link:''},
      {name:'Day 62',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7323680.jpg',link:''},
      {name:'Day 61',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7320175.jpg',link:''},
      {name:'Day 60',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7312986.jpg',link:''},
      {name:'Day 59',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7312985.jpg',link:''},
      {name:'Day 58',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7312984.jpg',link:''},
      {name:'Day 57',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7312983.jpg',link:''},
      {name:'Day 56',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7312982.jpg',link:''},
      {name:'Day 55',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7312980.jpg',link:''},
      {name:'Day 54',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7312979.jpg',link:''},
      {name:'Day 53',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7312978.jpg',link:''},
      {name:'Day 52',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7312977.jpg',link:''},
      {name:'Day 51',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7312976.jpg',link:''},
      {name:'Day 50',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7289862.jpg',link:''},
      
      {name:'Day 49',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7289861.jpg',link:'https://dls4.mrfooll.xyz/AgADIQ2914083'},
      {name:'Day 48',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7289859.jpg',link:'https://dls4.mrfooll.xyz/AgADIA2914072'},
      {name:'Day 47',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7289857.jpg',link:'https://dls4.mrfooll.xyz/AgADGg2914066'},
      {name:'Day 46',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7289855.jpg',link:'https://dls4.mrfooll.xyz/AgADGQ2914061'},
      {name:'Day 45',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7289853.jpg',link:'https://dls4.mrfooll.xyz/AgADGA2914059'},
      {name:'Day 44',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7289851.jpg',link:'https://dls4.mrfooll.xyz/AgADFg2914054'},
      {name:'Day 43',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7289849.jpg',link:'https://dls4.mrfooll.xyz/AgADFQ2914052'},
      {name:'Day 42',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7289847.jpg',link:'https://dls4.mrfooll.xyz/AgADEw2914043'},
      {name:'Day 41',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7289846.jpg',link:'https://dls4.mrfooll.xyz/AgADEg2914042'},
      {name:'Day 40',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7289844.jpg',link:'https://dls4.mrfooll.xyz/AgADgQ2914032'},
      {name:'Day 39',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7289843.jpg',link:'https://dls4.mrfooll.xyz/AgADgA2914022'},
      {name:'Day 38',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7289842.jpg',link:'https://dls4.mrfooll.xyz/AgADfw2914015'},
      {name:'Day 37',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7289841.jpg',link:'https://dls4.mrfooll.xyz/AgADfA2914007'},
      {name:'Day 36',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7289840.jpg',link:'https://dls4.mrfooll.xyz/AgADdg2914005'},
      {name:'Day 35',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7289839.jpg',link:'https://dls4.mrfooll.xyz/AgADcQ2913998'},
      {name:'Day 34',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7289838.jpg',link:'https://dls4.mrfooll.xyz/AgADcA2913991'},
      {name:'Day 33',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7289837.jpg',link:'https://dls4.mrfooll.xyz/AgAD2g2913983'},
      {name:'Day 32',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7289836.jpg',link:'https://dls4.mrfooll.xyz/AgAD2Q2913974'},
      {name:'Day 31',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7289835.jpg',link:'https://dls4.mrfooll.xyz/AgAD2A2913972'},
      {name:'Day 30',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7289834.jpg',link:'https://dls4.mrfooll.xyz/AgAD1w2913953'},
      {name:'Day 29',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7289833.jpg',link:'https://dls4.mrfooll.xyz/AgADug2913961'},
      {name:'Day 28',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7270691.jpg',link:'https://dls4.mrfooll.xyz/AgADuQ2913945'},
      {name:'Day 27',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7270690.jpg',link:'https://dls4.mrfooll.xyz/AgADtw2913937'},
      {name:'Day 26',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7270689.jpg',link:'https://dls4.mrfooll.xyz/AgADtg2913929'},
      {name:'Day 25',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7270688.jpg',link:'https://dls4.mrfooll.xyz/AgADrQ2913925'},
      {name:'Day 24',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7270687.jpg',link:'https://dls4.mrfooll.xyz/AgADrA2913916'},
      {name:'Day 23',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7270686.jpg',link:'https://dls4.mrfooll.xyz/AgADqA2913908'},
      {name:'Day 22',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7270685.jpg',link:'https://dls4.mrfooll.xyz/AgAD-w2913900'},
      {name:'Day 21',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7270683.jpg',link:'https://dls4.mrfooll.xyz/AgAD-g2913893'},
      {name:'Day 20',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7270681.jpg',link:'https://dls4.mrfooll.xyz/AgAD-Q2913883'},
      {name:'Day 19',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7270680.jpg',link:'https://dls4.mrfooll.xyz/AgAD-A2913873'},
      {name:'Day 18',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7270679.jpg',link:'https://dls4.mrfooll.xyz/AgAD9Q2913870'},
      {name:'Day 17',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7270678.jpg',link:'https://dls4.mrfooll.xyz/AgAD7g2913860'},
      {name:'Day 16',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7270677.jpg',link:'https://dls4.mrfooll.xyz/AgAD7A2913854'},
      {name:'Day 15',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7266548.jpg',link:'https://dls4.mrfooll.xyz/AgAD6Q2913818'},
      {name:'Day 14',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7266547.jpg',link:'https://dls4.mrfooll.xyz/AgADJA2913816'},
      {name:'Day 13',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7266546.jpg',link:'https://dls4.mrfooll.xyz/AgADIw2913807'},
      {name:'Day 12',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7266545.jpg',link:'https://dls4.mrfooll.xyz/AgADHQ2913805'},
      {name:'Day 11',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7266544.jpg',link:'https://dls4.mrfooll.xyz/AgADGg2913796'},
      {name:'Day 10',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7266543.jpg',link:'https://dls4.mrfooll.xyz/AgADFw2913787'},
      {name:'Day 9',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7262445.jpg',link:'https://dls4.mrfooll.xyz/AgADEw2913777'},
      {name:'Day 8',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7229921.jpg',link:'https://dls4.mrfooll.xyz/AgADEg2913772'},
      {name:'Day 7',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7229924.jpg',link:'https://dls4.mrfooll.xyz/AgADEA2901561'},
      {name:'Day 6',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7229923.jpg',link:'https://dls4.mrfooll.xyz/AgAD0Q2901547'},
      {name:'Day 5',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7229922.jpg',link:'https://dls4.mrfooll.xyz/AgADzw2901526'},
      {name:'Day 4',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7229920.jpg',link:'https://dls4.mrfooll.xyz/AgADxw2901511'},
      {name:'Day 3',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FtGjZTOsigKiVGNjwOlHg6MxVGeJ.jpg',link:'https://dls4.mrfooll.xyz/AgADxg2901493'},
      {name:'Day 2',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fchk6437QStz0wwPOBGHmdRmSwR4.jpg',link:'https://dls4.mrfooll.xyz/AgADxA2901465'},
      {name:'Day 1',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fkm1gqgF74c8cZMVH6XaMvdYoxo8.jpg',link:'https://dls4.mrfooll.xyz/AgADvA2901441'},
      {name:'Day 0',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fgml2ElsU6NFUNVJNTZqNcBUyTAV.jpg',link:'https://dls4.mrfooll.xyz/AgADug2901450'},
      
    ]
  },
  {
    name: "TCDC",
    image: 'https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg',
    shows:[
      { name: "Finale", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://herokustreamapiiiiiii-75c3359a5ad7.herokuapp.com/AgADYR2510558" },
      { name: "18", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tsneh.vercel.app/n5ikl2exctsj" },
      { name: "17", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tsneh.vercel.app/wsrhgzd1fky-" },
      { name: "16", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tsneh.vercel.app/ysuourwdekzm" },
      { name: "15", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tsneh.vercel.app/eqe9qownfcrw" },
        { name: "14", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/3949z54t" },
        { name: "13", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/cvyv69zr" },
        { name: "12", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/yhrfy8px" },
        { name: "11", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/ye983f8v" },
        { name: "10", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/mryf9sjn" },
        { name: "9", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/4x7vsf4m" },
        { name: "8", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/2xmch459" },
        { name: "7", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/mv87uuzj" },
        { name: "6", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/yc4vycrz" },
        { name: "5", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/yyps5js4" },
        { name: "4", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/afddfmbf" },
        { name: "3", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/kewzmddx" },
        { name: "2", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/zfn39fu7" },
        { name: "1", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/y872r5f8" },

    ]
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
