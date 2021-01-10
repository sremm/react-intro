import logo from "./logo.svg";
import "./App.css";
import SimpleForm from "./SimpleForm.js";

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>Welcome!</div>
      <SimpleForm />
    </header>
  </div>
);

export default App;
