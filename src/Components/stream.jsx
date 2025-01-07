import React, { useState, useEffect } from 'react';
import './live.css';

const FT = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const [response1, response2] = await Promise.all([
                    fetch('https://sony-eight.vercel.app/'),  // First JSON file
                    fetch('https://fancode-two.vercel.app/') ,    // Second JSON file
                ]);

                if (!response1.ok || !response2.ok) {
                    throw new Error("Failed to fetch matches");
                }

                const data1 = await response1.json();
                const data2 = await response2.json();
                
                // Normalize the match data for both JSONs
                const matchesFromFirstJson = data1.matches.map((match) => ({
                    match_id: match.contentId,
                    match_name: match.title,
                    banner: match.portraitThumb,
                    stream_link: match.pub_url,
                    team_1: match.homeTeam,
                    team_2: match.awayTeam,
                    team_1_flag: "", // No team flag in this JSON
                    team_2_flag: "", // No team flag in this JSON
                }));

                const matchesFromSecondJson = data2.matches.map((match) => ({
                    match_id: match.match_id,
                    match_name: match.match_name,
                    banner: match.banner,
                    stream_link: match.stream_link,
                    team_1: match.team_1,
                    team_2: match.team_2,
                    team_1_flag: match.team_1_flag,
                    team_2_flag: match.team_2_flag,
                }));

                // Merging both match arrays into one
                const allMatches = [...matchesFromFirstJson, ...matchesFromSecondJson];
                setMatches(allMatches);
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
            <h1 className='sideheading'>Live Matches</h1>
            <div id='match-container' className='match-container'>
                {matches.map((match) => (
                    <div key={match.match_id} className='card'>
                        <img src={match.banner} alt={match.match_name} />
                        <h2>{match.match_name}</h2>
                        {match.team_1 && match.team_2 && (
                            <p>
                                <img src={match.team_1_flag} alt={match.team_1} width="25" /> {match.team_1} 
                                vs 
                                <img src={match.team_2_flag} alt={match.team_2} width="25" /> {match.team_2}
                            </p>
                        )}
                        <button onClick={() => window.open(match.stream_link, '_blank')}>
                            Watch Now
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FT;
