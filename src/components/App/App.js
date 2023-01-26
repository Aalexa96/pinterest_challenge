import Grid from '../Grid/Grid';
import Search from '../Search/Search';
import './App.css';
import { useEffect } from 'react';
import { getCatsByBreed } from '../../services/catsAPI';
import { useContext } from 'react';
import { MyContext } from '../../contexts/myContext';
import Loader from '../Loader/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCommentDots, faUser } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo/Logo';

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
        <Logo/>
        <Search />
        <FontAwesomeIcon icon={faBell} className='App-header-icon' />
        <FontAwesomeIcon icon={faCommentDots} className='App-header-icon' />
        <FontAwesomeIcon icon={faUser} className='App-header-icon' style={{marginRight: '24px'}}/>
      </header>
      <main className="App-main">
        {!state.loading && <Grid cats={state?.cats} noColumns={6} />}
        {state.loading && <Loader />}
      </main>
    </div>
  );
}

export default App;
