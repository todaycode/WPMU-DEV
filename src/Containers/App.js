import React from "react";
import { createBrowserHistory } from 'history';
import "./App.css";
import SigninPage from "../Components/SigninPage/SigninPage";


export const history = createBrowserHistory();

function App() {
  
  return (
    <div>
      <SigninPage />
    </div>
  );
}

export default App;
