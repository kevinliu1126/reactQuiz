import logo from './logo.svg';
import './App.css';
import MultiButton from './Cgu_multibuttom'
import HelloCGU from './Hello_cgu';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
 
  function App() {
    return (
      <div className="App">
        <div>
          {HelloCGU()}
        </div>
        <div>
          {MultiButton(10) }
        </div>
      </div>
    );
  }
export default App;
