import logo from './kuvat/gas-station256.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div>
        Kävitkö tankilla taas?
        </div>
        <span>
        <img src={logo} className="App-logo" alt="logo" />
        </span>
      </div>
    </div>
  );
}

export default App;