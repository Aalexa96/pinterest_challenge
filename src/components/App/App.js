import Grid from '../Grid/Grid';
import Search from '../Search/Search';
import './App.css';
import { useEffect, useState } from 'react';
import { getRandomImages } from '../../services/catsAPI';

function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    getRandomImages().then(cats => {
      setCats(cats);
    });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Search />
      </header>
      <main>
        <Grid cats={cats} />
      </main>
    </div>
  );
}

export default App;
