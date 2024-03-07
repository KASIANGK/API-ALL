//PROMISE.ALL
//Promise.all est une méthode JavaScript qui prend un tableau de 
//promesses en entrée et renvoie une nouvelle promesse qui est résolue 
//lorsque toutes les promesses du tableau d'entrée sont résolues, ou rejetée 
//si l'une des promesses est rejetée.

// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [emojiData, setEmojiData] = useState([])
//   const [stickerData, setStickerData] = useState([])

//   useEffect(() => {
//     const fetchEmojiData = fetch(`https://api.giphy.com/v2/emoji?api_key=uhOycU6YJ16IGYQfHGk0HhLQNkhOUz8d&limit=10&offset=0`)
//       .then((response) => response.json())

//     const fetchStickerData = fetch(`https://api.giphy.com/v1/stickers/packs/3138/stickers?api_key=uhOycU6YJ16IGYQfHGk0HhLQNkhOUz8d&limit=10&offset=0`)
//       .then((response) => response.json())

//     Promise.all([fetchEmojiData, fetchStickerData])
//       .then(([emojiResponse, stickerResponse]) => {
//         setEmojiData(emojiResponse.data)
//         setStickerData(stickerResponse.data)
//       })
//       .catch((error) => console.log(error))
//   }, [])

//   return (
//     <div className='App'>
//       <p></p>
//       <div className="api-container">
//         {emojiData.map((element, i) => (
//           <div key={i} className="emoji-item">
//             <img src={element.images.original.url}/>
//           </div>
//         ))}
//         {stickerData.map((element, i) => (
//           <div key={i} className="sticker-item">
//             <img src={element.images.original.url}/>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default App



//AWAIT ET ASYNC
import React, { useState, useEffect } from 'react';
import './App.css';
import Video from './Components/Video';

function App() {
  const [emojiData, setEmojiData] = useState([])
  const [stickerData, setStickerData] = useState([])
  const [trendData, setTrendData] = useState([])
  const [emojiImage, setEmojiImage] = useState(null)
  const [yt, setYt] = useState([])



  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const emojiResponse = await fetch(`https://api.giphy.com/v2/emoji?api_key=uhOycU6YJ16IGYQfHGk0HhLQNkhOUz8d&limit=10&offset=0`)
        const emojiJson = await emojiResponse.json()
        setEmojiData(emojiJson.data)

        const stickerResponse = await fetch(`https://api.giphy.com/v1/stickers/packs/3138/stickers?api_key=uhOycU6YJ16IGYQfHGk0HhLQNkhOUz8d&limit=10&offset=0`)
        const stickerJson = await stickerResponse.json()
        setStickerData(stickerJson.data)

        const trendResponse = await fetch(`https://api.giphy.com/v1/stickers/trending?api_key=uhOycU6YJ16IGYQfHGk0HhLQNkhOUz8d&limit=10&offset=0&rating=g&bundle=messaging_non_clips`)
        const trendJson = await trendResponse.json()
        setTrendData(trendJson.data)

        const ytResponse = await fetch(`https://www.googleapis.com/youtube/v3/channels?key=AIzaSyDfs79qSU9zCUNAUQ6bBdXr4oKhar_-KhI&part=snippet&id=UC_x5XG1OV2P6uZZ5FSM9Ttw`)
        const ytJson = await ytResponse.json()
        setYt(ytJson.items)

      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])


  


  useEffect(() => {
    if (emojiData.length > 0) {
      setEmojiImage(emojiData[0].images.original.url)
    }
  }, [emojiData])


  return (
    <div className='App'>
      {/* <div className="api-container">
        {emojiData.map((element, i) => (
          <div key={i} className="emoji-item">
            <img src={element.images.original.url}/>
          </div>
        ))}
        {stickerData.map((element, i) => (
          <div key={i} className="sticker-item">
            <img src={element.images.original.url}/>
          </div>
        ))}
        {trendData.map((element, i) => (
          <div key={i} className="trend-item">
            <img src={element.images.original.url}/>
          </div>
        ))}
      </div> */}
      <div className="imageEmoji">
        <img src={emojiImage}/>
      </div>
      <div className="yt-container">
        {yt.map((channel, index) => (
          <div key={index} className="channel-item">
            <h2>{channel.snippet.title}</h2>
            <p>{channel.snippet.description}</p>
            <img src={channel.snippet.thumbnails.medium.url} alt={channel.snippet.title} />
          </div>
        ))}
      </div>
      <div className="imageEmoji">
        <img src={emojiImage} alt="Emoji" />
      </div>

      <Video></Video>
    </div>
  )
}

export default App


