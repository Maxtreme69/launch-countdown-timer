import './App.css';
import PatternHills from './img/pattern-hills.svg';
import FaceBookIcon from './img/icon-facebook.svg'; 
import PinterestIcon from './img/icon-pinterest.svg';
import InstagramIcon from './img/icon-instagram.svg';

function App() {
  return (
    <div className="App">
      <div className="pattern-hills">
        <img src={PatternHills} alt="Pattern Hills" />
      </div>

      <div className="launch-heading">
        <h1>WE'RE LAUNCHING SOON</h1>
      </div>
      
      <div className="icon-container">
        <img src={FaceBookIcon} alt="Facebook Icon" />
        <img src={PinterestIcon} alt="Pinterest Icon" />
        <img src={InstagramIcon} alt="Instagram Icon" />
      </div>
    </div>
  );
}

export default App;
