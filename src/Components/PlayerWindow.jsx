import React from 'react';
import ReactPlayer from 'react-player';

const PlayerWindow = ({ url, onClose }) => {
    return (
        <div className="player-window">
            <button onClick={onClose}>Close</button>
            <ReactPlayer
                url={url}
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
    );
};

export default PlayerWindow;
