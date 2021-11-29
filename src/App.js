import Images from './images.jpg';
import ZORO from './ZORO.mp4';
import './Style.css';
import './App.css';

function App() {
  return (
    <div>
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="title red">ONE PEACE</h1>
      <br />
      <img src={Images} alt="images" />
      <br />
      <img src="/logo11.jpg" alt="logo11" />
    </div>
    <video width={1200} height={800} controls>
      <source src={ZORO} type="video/mp4" />
    </video>
  </div>
  
  );
}

export default App;
