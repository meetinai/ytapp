import React, { useEffect, useState } from 'react';
import VideoCard from '../components/VideoCard';

export default function Home() {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=yd9q-rQs3dJPyRMxG3JUWpjVE4WbaSGsDd2UZPSkAplSb5eV6264c_mIWVhwG4kLFrLV8MgAB-40AdOTAUf5qANJkAB8Azmjm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKcKjlNotw4kNil6VQHWJWqh16jtIvPxOX8QG6EGLjavmtKVC3Ny-Vmci4WR5gCmApdFurGbQcyO2CKTGsVrDCYrJS0JZ4_rtdz9Jw9Md8uu&lib=M9WSz7FTGDfTGp3SC5ReM9pJOhEldbAy6')
      .then(response => response.json())
      .then(data => setVideoData(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {videoData.map((video, index) => (
        <VideoCard key={index} videoData={video} />
      ))}
    </div>
  );
}