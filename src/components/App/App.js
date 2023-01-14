import Grid from '../Grid/Grid';
import Search from '../Search/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
      </header>
      <main>
        <Grid />
      </main>
    </div>
  );
}

export default App;
