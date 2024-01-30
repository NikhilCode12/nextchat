import "./App.css";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Chats from "./pages/Chats";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/chats" component={Chats} />
    </div>
  );
}

export default App;
