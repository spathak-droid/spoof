import './App.css';
import { useEffect } from 'react';
import sound from './Esters-Rd.mp3'

const emoji = String.fromCodePoint(0x1F606);
// U+1F606



function App() {
  const audio = new Audio(sound);

  document.addEventListener("click", function() {
   audio.play()
  });


  return (
    
    <div className="App">
      YOU JUST GOT TROLLED{emoji}
      <div>
        Click Anywhere Though.
      </div>
    </div>
  );
}

export default App;
