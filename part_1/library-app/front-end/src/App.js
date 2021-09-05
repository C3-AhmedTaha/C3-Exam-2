import React from "react";
import "./App.css";

import{Route}from "react-router-dom"
import Books from "./component/Books"
const App = () => {
  return (
    <>
      <h1>App Component</h1>
       <Route path="/library/create_book" component={Books}/>

    </>
  );
};

export default App;
