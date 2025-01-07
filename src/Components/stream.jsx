import React, { useState, useEffect } from 'react';
import './live.css';

const FT = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const [response1, response2, response3] = await Promise.all([
                    fetch('https://sony-eight.vercel.app/'),  
                                         fetch('https://jiocinema-livid.vercel.app/'),
                    fetch('https://fancode-two.vercel.app/'), 



                ]);

                if (!response1.ok || !response2.ok || !response3.ok) {
                    throw new Error("Failed to fetch matches");
                }

                const data1 = await response1.json();
                const data2 = await response2.json();
                const data3 = await response3.json();

                // Normalize the match data for each JSON
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

                const matchesFromThirdJson = data3.map((match) => ({
                        match_id: match.id,
                        match_name: match.title,
                        banner: match.logo,
                        stream_link: match.link,
                        team_1: "", // No team info in this JSON
                        team_2: "", // No team info in this JSON
                        team_1_flag: "", // No team flag in this JSON
                        team_2_flag: "", // No team flag in this JSON

                }));

                const matchesFromSecondJson = data2.matches
                      .filter((match) => match.adfree_url) // Filter matches with dai_url
                    .map((match) => ({
                                                 
                        match_id: match.match_id,
                        match_name: match.title,
                        banner: match.src,
                        stream_link: match.adfree_url,
                        team_1: match.team_1,
                        team_2: match.team_2,
                        team_1_flag: match.team_1_flag,
                        team_2_flag: match.team_2_flag,

                    }));



                // Combine all matches
                const allMatches = [
                    ...matchesFromFirstJson,
                    ...matchesFromThirdJson,
                    ...matchesFromSecondJson,
      
                ];

                setMatches(allMatches);
            } catch (err) {
                setError("Error fetching matches. Please try again later.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMatches();
    }, []);

    if (loading) {
        return <div>Loading matches...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <h1 className="sideheading">Live Matches</h1>
            <div id="match-container" className="play">
                {matches.map((match) => (
                    <div key={match.match_id} className="stream" onClick={() => window.open(match.stream_link, "_blank")}>
                        <img src={match.banner} alt={match.match_name} />
                        <h2>{match.match_name}</h2>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FT;
