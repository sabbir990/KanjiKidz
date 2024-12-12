import React, { useState } from 'react';

export default function Tutorial_card({ tutorial }) {
    const [videoError, setVideoError] = useState(false);

    const handleVideoError = () => {
        setVideoError(true);
    };

    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white p-4">
            <div className="relative">
                {!videoError ? (
                    // Embedding YouTube or Vimeo video
                    <iframe
                        width="100%"
                        height="200"
                        src={`https://www.youtube.com/embed/${tutorial?.videoId}`}
                        title={tutorial?.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onError={handleVideoError}
                    ></iframe>
                ) : (
                    // Fallback if video is unavailable
                    <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-700">Video Not Available</span>
                    </div>
                )}
            </div>
            <div className="pt-4">
                {/* Title */}
                <h3 className="font-semibold text-xl text-gray-800">{tutorial?.title}</h3>
                {/* Description */}
                <p className="text-sm text-gray-600 mt-2">{tutorial?.description}</p>
                {/* Link to YouTube Video */}
                <a
                    href={tutorial?.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-sm mt-2 block"
                >
                    Watch on YouTube
                </a>
            </div>
        </div>
    );
}
