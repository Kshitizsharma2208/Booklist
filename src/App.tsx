import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./component/header";
import NavigationComponent from "./component/header/navigation";
import ShadowBaoxComponent from "./component/shadowbox";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginComponent from "./pages/login";
import BooklistComponent from "./pages/booklist";
function App() {
  const menuItems: Array<String> = ["Menu 1", "Menu 2", "Menu 3", "Menu4"];
  const [menues, setMenues]: Array<any> = useState([]);
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");

  useEffect(() => {
    console.log("INIT");
    setMenues(menuItems);
  }, []);

  const addNewMenu = () => {
    const items = [...menues];
    items.push("Menu " + (menues.length + 1));
    setMenues(items);
    console.log("menues", items);
  };

  const submitForm = () => {
    let data = {
      name: "Tets",
      company: "IWeb",
      email: email,
      password: email,
    };

    console.log("data", JSON.stringify(data));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/booklist" element={<BooklistComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
