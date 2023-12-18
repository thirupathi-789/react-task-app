import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/cart" Component={Cart} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>  
    </>
  );
}
export default App;
