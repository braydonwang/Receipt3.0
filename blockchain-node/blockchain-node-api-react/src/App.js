import { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; 
import Home from "./Pages/Home/Home"
import Products from "./Pages/Products/Products";

function App() {
  // const [contacts, setContacts] = useState([]);

  // useEffect(() => {
  //   async function fetcher() {
  //     const response = await fetch("http://localhost:3001/contacts");
  //     const contacts = await response.json();

  //     setContacts(contacts);
  //   }

  //   fetcher();
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
