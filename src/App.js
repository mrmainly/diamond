import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from './pages/home'
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Layout from './components/layout'

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
