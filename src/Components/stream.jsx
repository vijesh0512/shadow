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

                const responses = [response1, response2, response3];

                // Check if all responses are OK
                responses.forEach((response, index) => {
                    if (!response.ok) {
                        throw new Error(`API ${index + 1} failed with status ${response.status}`);
                    }
                });

                // Parse JSON responses
                const data1 = await response1.json();
                const data2 = await response2.json();
                const data3 = await response3.json();

                // Safeguard against unexpected data structures
                const matchesFromFirstJson = (data1.matches || []).map((match) => ({
                    match_id: match.contentId || `match-${Math.random()}`,
                    match_name: match.title || "Unknown Match",
                    banner: match.portraitThumb || "",
                    stream_link: match.pub_url || "#",
                    team_1: match.homeTeam || "Team 1",
                    team_2: match.awayTeam || "Team 2",
                    team_1_flag: "",
                    team_2_flag: "",
                }));

                const matchesFromSecondJson = (data2.matches || []).map((match) => ({
                    match_id: match.id || `match-${Math.random()}`,
                    match_name: match.title || "Unknown Match",
                    banner: match.logo || "",
                    stream_link: match.link || "#",
                    team_1: "",
                    team_2: "",
                    team_1_flag: "",
                    team_2_flag: "",
                }));

                const matchesFromThirdJson = (data3 || [])
                    .filter((match) => match.dai_url)
                    .map((match) => ({
                        match_id: match.match_id || `match-${Math.random()}`,
                        match_name: match.title || "Unknown Match",
                        banner: match.src || "",
                        stream_link: match.dai_url || "#",
                        team_1: match.team_1 || "Team 1",
                        team_2: match.team_2 || "Team 2",
                        team_1_flag: match.team_1_flag || "",
                        team_2_flag: match.team_2_flag || "",
                    }));

                // Combine all matches
                const allMatches = [
                    ...matchesFromFirstJson,
                    ...matchesFromSecondJson,
                    ...matchesFromThirdJson,
                ];

                setMatches(allMatches);
            } catch (err) {
                setError(`Error fetching matches: ${err.message}`);
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

    if (matches.length === 0) {
        return <div>No matches available at the moment.</div>;
    }

    return (
        <>
            <h1 className="sideheading">Live Matches</h1>
            <div id="match-container" className="play">
                {matches.map((match) => (
                    <div
                        key={match.match_id}
                        className="stream"
                        onClick={() => window.open(match.stream_link, "_blank")}
                    >
                        <img src={match.banner} alt={match.match_name} />
                        <h2>{match.match_name}</h2>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FT;
