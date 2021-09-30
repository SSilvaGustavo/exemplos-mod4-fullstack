import "./App.css";
import Home from "./pages/Home/Home.js";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Produtos</h1>
      </header>
      <div className="content">
        <Switch>
          <Route path="/" exact={true} component={Home} />
        </Switch>
      </div>
    </div>
  );
}
