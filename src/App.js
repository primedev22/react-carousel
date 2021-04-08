import Carousel from './components/Carousel';
import './App.scss';

// Mock API
import slides from './slides.json';

function App() {
  return (
    <div className="App">
      <Carousel data={slides} />
    </div>
  );
}

export default App;
