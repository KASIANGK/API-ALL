import React from 'react'

function Video() {


  return (
    <div className="Video">
      <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/5-tuuD2RpoA?si=gW-9OD-GscfGwS-z" 
      title="YouTube video player" 
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>
      </iframe>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/5-tuuD2RpoA?si=gW-9OD-GscfGwS-z" 
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="My YouTube Video 2"
      ></iframe>
    </div>
  );
}

export default Video
