import Home from "./components/Home";
import Number from "./components/Number";
import Word from "./components/Word";
import Hello from "./components/Hello";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Link to="/home"></Link>
      <Link to="/number"></Link>
      <Link to="/word"></Link>
      <Link to ="/word/color1/color2/color3"></Link>
    
    
    <Switch>
      <Route path="/:word/:colorone/:colortwo/:colorthree">
        <Hello />
      </Route>
      <Route path="/:word">
        <Word />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/:number">
        <Number />
      </Route>
    </Switch>
    
    
    
    
    </BrowserRouter>
  );
}

export default App;
