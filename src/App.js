import React from 'react'; // Sempre que eu usar a sintaxe jsx (html) o React precisa estar presente no arquivo.
import './App.css';

import draw_001 from './assets/draw_001.png';

function App() {
    return <img width="200" src={draw_001} />
}

export default App;