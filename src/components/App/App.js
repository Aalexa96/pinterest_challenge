import Grid from '../Grid/Grid';
import Search from '../Search/Search';
import './App.css';
import { useEffect } from 'react';
import { getCatsByBreed } from '../../services/catsAPI';
import { useContext } from 'react';
import { MyContext } from '../../contexts/myContext';
import Loader from '../Loader/Loader';

function App() {
  const [state, dispatch] = useContext(MyContext);

  useEffect(() => {
    dispatch({
      type: 'SET_LOADING'
    });

    getCatsByBreed(state.searchBreedId).then(catz => {

      dispatch({
        type: 'SET_CATS',
        cats: catz
      });

    });

  }, [dispatch, state.searchBreedId])

  return (
    <div className="App">
      <header className="App-header">
        <Search />
      </header>
      <main>
        {!state.loading && <Grid cats={state?.cats} noColumns={6} />}
        {state.loading && <Loader />}
      </main>
    </div>
  );
}

export default App;
