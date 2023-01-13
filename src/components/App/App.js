import logo from '../../logo.svg';
import Card from '../Card/Card';
import './App.css';

function App() {
  const foo = 'William';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Card/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {foo}
        </a>
      </header>
    </div>
  );
}

export default App;
