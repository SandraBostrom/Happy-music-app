import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
      title: "Have a super-awesome day",
      img_src: "./images/song-2.jpg",
      src: "./music/Pharrell Williams - Because im happy.mp3",
    },
    {
      title: "Find power in nature",
      img_src: "./images/song-1.jpg",
      src: "./music/Marvin Gaye And Tammi Terrell - Aint No Mountain.mp3",
    },
    {
      title: "Say something nice to your friend",
      img_src: "./images/song-3.jpg",
      src: "./music/L'Orchestra Cinematique - You Got a Friend in Me (From _Toy Story_).mp3",
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
