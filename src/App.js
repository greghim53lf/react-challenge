import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainApp from "./SenGen/MainApp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
