import "./styles.css";
import Home from "./components/Home";
import ProfileView from "./components/ProfileView";
import { Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/member/:id" component={ProfileView} />
    </BrowserRouter>
  );
}
