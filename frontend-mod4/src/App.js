// React
import { Route, Switch} from "react-router-dom";

//Pages
import Home from "./pages/Home/Home.js";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import ViewProduct from "./pages/ViewProduct/ViewProduct";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";
import DeleteProduct from "./pages/DeleteProduct/DeleteProduct";
import Header from "./components/Header/Header.js";

//CSS
import "./App.css";
import "./styles/form.css"
import "./styles/card.css"

export default function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/product/create" component={CreateProduct}/>
          <Route path="/product/view/:id" component={ViewProduct}/>
          <Route path="/product/update/:id" component={UpdateProduct}/>
          <Route path="/product/delete/:id" component={DeleteProduct}/>
        </Switch>
      </div>
    </div>
  );
}
