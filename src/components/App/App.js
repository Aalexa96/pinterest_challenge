import Grid from '../Grid/Grid';
import Search from '../Search/Search';
import './App.css';
import { useEffect } from 'react';
import { getRandomImages } from '../../services/catsAPI';
import { useContext } from 'react';
import { MyContext } from '../../contexts/myContext';

function App() {
  const [state, dispatch] = useContext(MyContext);

  useEffect(() => {

    getRandomImages().then(catz => {

      dispatch({
        type:'SET_CATS', 
        cats: catz
      });

    });

  }, [dispatch])

  return (
    <div className="App">
      <header className="App-header">
        <Search />
      </header>
      <main>
        <Grid cats={state?.cats} noColumns={6} />
      </main>
    </div>
  );
}

export default App;
