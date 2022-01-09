import Header from "./components/Header";
import Card from "./components/Card";
import Button  from "./components/Button";
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      
      <Header />
      <Card />
      <Button
          pages={
          [
            ["Personal"],
            ["About"],
            ["Press"],
            ["Contact"],
          ]
        } 
      />

    </div>
      </Router>
  );
}

export default App;
