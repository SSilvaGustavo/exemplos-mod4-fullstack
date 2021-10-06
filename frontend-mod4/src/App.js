import "./App.css";
import Home from "./pages/Home/Home.js";
import { Route, Switch, Link } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import ViewProduct from "./pages/ViewProduct/ViewProduct";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Produtos</h1>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/product/create">Create</Link>
        <br/>
        <Link to="/">Home</Link>
        <br/>
      </header>
      <div className="content">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/product/create" component={CreateProduct}/>
          <Route path="/products/view/:id" component={ViewProduct}/>
        </Switch>
      </div>
    </div>
  );
}
