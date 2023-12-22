import React from 'react';

interface VideoCardProps {
  videoData: {
    "Video ID": string,
    "Video Title": string,
    "Video Views": number,
    "Video Likes": number,
    "Video Comments": number
  }
}

const VideoCard: React.FC<VideoCardProps> = ({ videoData }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 text-black">
      <h2 className="text-2xl font-bold mb-2">{videoData["Video Title"]}</h2>
      <p><strong>Views:</strong> {videoData["Video Views"]}</p>
      <p><strong>Likes:</strong> {videoData["Video Likes"]}</p>
      <p><strong>Comments:</strong> {videoData["Video Comments"]}</p>
    </div>
  );
}

export default VideoCard;