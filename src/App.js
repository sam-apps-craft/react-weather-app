
import './App.css';
import Search from "./Search";
import Weather from "./Weather";
import Footer from "./Footer";
import Forecast from './Forecast';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <Weather />
        <Forecast />
        <Footer />
      </header>
    </div>
  );
}

export default App;
