import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App " style={{background:"#131111"}} >
    <Header/>
    <Content/>
    <Carousel/>
    </div>
  );
}

export default App;
