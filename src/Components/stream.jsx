import React, { useState, useEffect } from 'react';
import './live.css';

const FT = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const response = await fetch('https://sony-eight.vercel.app/');
                if (!response.ok) {
                    throw new Error("Failed to fetch matches");
                }
                const data = await response.json();
                setMatches(data.matches);
            } catch (err) {
                setError("Error fetching matches. Please try again later.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMatches();
    }, []); // Runs once when component mounts

    if (loading) {
        return <div>Loading matches...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <h1 className='sideheading'>Live TV</h1>
            <div id='channel-player' className='play'>
                {matches.map((match) => (
                    <div key={match.contentId} className='son'>
                        <img src={match.portraitThumb} alt={match.title} />
                        <p>{match.title}</p>
                        <button onClick={() => window.open(match.pub_url, '_blank')}>
                            Watch Now
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FT;
