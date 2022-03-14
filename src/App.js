import logo from './logo.svg';
import './App.css';
import profilePic from './profile.jpg';

const clickEvent = (img) => {
  img.target.setAttribute('src', profilePic);
}

function clickEvent2(e){
  e.target.setAttribute('src', {profilePic});
  e.target.setAttribute('alt', 'logo');
}

const image = (
	<img 
		src={logo}
		alt="image"
    onClick={clickEvent}
    className="App-logo"
  />
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {image}
        <div id="target" ></div>
        <p>
          Pedro Azenha
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
}

export default App;
