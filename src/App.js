import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Sayans from "./Components/Sayans";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Sayans" component={Sayans} />
        {/* <Route path="/Terriens" component={Terriens} />
        <Route path="/Nameks" component={Nameks} />
        <Route path="/Autres" component={Autres} /> */}
      </Switch>
    </div>
  );
}

export default App;
