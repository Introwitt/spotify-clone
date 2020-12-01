import './App.css';
import Login from './components/Login';

function App() {
  return (
    // BEM
    <div className="app">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;
