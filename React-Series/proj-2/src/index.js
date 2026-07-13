import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from './component/Home';
import Blogs from './component/Blog';
import Contact from './component/Contact';
import Nopage from './component/Nopage';
import H1 from './component/H1';
import './index.css';

export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="blogs" element={<Blogs /> } />
      <Route path="contact" element={<Contact />} />
      <Route path="h" element={<H1 />} />
      <Route path="*" element={<Nopage />} />
    </Route>
      
    </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals((console.log));
