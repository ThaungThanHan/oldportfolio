import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './Components/Main.js';
function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/'>
           <Main/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
