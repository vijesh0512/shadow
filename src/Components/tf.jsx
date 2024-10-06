import React, { useEffect } from 'react';
import './live.css';

const tf = [
    { name: '2024', image: 'https://tse1.mm.bing.net/th?id=OIP.DV5kBw14-70B990kJ09frgHaEK&pid=Api&P=0&h=220', link: 'https://allinonereborn.com/tatatv.php?id=45589'},
    { name: '2022-2023', image: 'https://tse1.mm.bing.net/th?id=OIP.DV5kBw14-70B990kJ09frgHaEK&pid=Api&P=0&h=220', link: 'https://allinonereborn.com/tatatv.php?id=45599'},
    { name: '2019-2021', image: 'https://tse1.mm.bing.net/th?id=OIP.DV5kBw14-70B990kJ09frgHaEK&pid=Api&P=0&h=220', link: 'https://allinonereborn.com/tatatv.php?id=45609'},
    { name: '1', image: 'https://tse1.mm.bing.net/th?id=OIP.Weo1h6tEf9Utzhjv-gFsxQHaEK&pid=Api&P=0&h=220', link: 'https://allinonereborn.com/tatatv.php?id=59527'},
    { name: '2', image: 'https://tse1.mm.bing.net/th?id=OIP.Weo1h6tEf9Utzhjv-gFsxQHaEK&pid=Api&P=0&h=220', link: 'https://allinonereborn.com/tatatv.php?id=59528'},
    { name: '3', image: 'https://tse1.mm.bing.net/th?id=OIP.Weo1h6tEf9Utzhjv-gFsxQHaEK&pid=Api&P=0&h=220', link: 'https://allinonereborn.com/tatatv.php?id=59529'},
    { name: '4', image: 'https://tse1.mm.bing.net/th?id=OIP.Weo1h6tEf9Utzhjv-gFsxQHaEK&pid=Api&P=0&h=220', link: 'https://allinonereborn.com/tatatv.php?id=59530'},
    { name: '5', image: 'https://tse1.mm.bing.net/th?id=OIP.Weo1h6tEf9Utzhjv-gFsxQHaEK&pid=Api&P=0&h=220', link: 'https://allinonereborn.com/tatatv.php?id=59531'},
];

const FT = () => {
    useEffect(() => {
        const container = document.getElementById('channel-player');
        container.innerHTML = '';

        tf.forEach(channel => {
            const channelDiv = document.createElement('div');
            channelDiv.classList.add('son');
            channelDiv.innerHTML = `
                <img src="${channel.image}" alt="${channel.name}">
                <p>${channel.name}</p>
            `;
            channelDiv.onclick = () => window.open(channel.link, '_blank');
            container.appendChild(channelDiv);
        });
    }, []);

    return (
        <>
            <h1 className='sideheading'>Live TV</h1>
            <div id='channel-player' className='play'></div>
        </>
    );
};

export default FT;
