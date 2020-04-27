import React from "react";
import "./App.css";
import MyRouter from "./components/common/MyRouter";
import router from "./router";

function App() {
  return (
    <div className="App">
      <div>这是我创建的dev开发分支</div>
      <MyRouter router={router}></MyRouter>
    </div>
  );
}

export default App;
