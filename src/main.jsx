import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAHlTpbRLjlKqgu1C_GD6a93Kf9HoillAw",
  authDomain: "grocery-list-787ac.firebaseapp.com",
  projectId: "grocery-list-787ac",
  storageBucket: "grocery-list-787ac.appspot.com",
  messagingSenderId: "503183584661",
  appId: "1:503183584661:web:2ddcb9d86f1f2f370c5a9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
