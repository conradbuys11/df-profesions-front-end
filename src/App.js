import logo from './logo.svg';
import Test from './components/Test.js'
import './App.css';

function App() {
  const searchForItemById = id => {
    fetch(`http://localhost:3001/items/${id}`)
    .then(rsp => rsp.json())
    .then()
  }

  return (
    <div className="App">
      <h1>Welcome to the DF Profession Project - Under Construction</h1>
      < Test />
    </div>
  );
}

export default App;
