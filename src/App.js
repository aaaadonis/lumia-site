import Header from "./components/Header";
import Card from "./components/Card";
import Button  from "./components/Button";

function App() {
  return (
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
  );
}

export default App;
