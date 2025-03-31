import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Shop from "./components/Shop";
import PostList from "./components/PostList";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

function App() {
  const sendData = async () => {
    const url = "https://webhook.site/b9a8418e-e015-43bc-9acb-2ecfec13733a";  

    const data = {
      key1: "myusername",
      email: "mymail@gmail.com",
      name: "Isaac",
      lastname: "Doe",
      age: 27,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response;
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
    <button onClick={sendData} > Send data</button>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>
          }
        ></Route>

        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <Profile />
            </ErrorBoundary>
          }
        ></Route>

        <Route
          path="/shop"
          element={
            <ErrorBoundary>
              <Shop />
            </ErrorBoundary>
          }
        ></Route>
      </Routes>
      <PostList />
      <Example1 />
      <Example2 />
      <Example3 />
    </>
  );
}

export default App;
