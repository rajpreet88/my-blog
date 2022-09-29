import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ArticleList from './pages/ArticleList';
import Article from './pages/Article'
import NotFound from './pages/NotFound';

import NavBar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <NavBar/>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/article-list' element={<ArticleList/>}/>
          <Route path='/article/:name' element={<Article/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>  
      </div>
    </BrowserRouter>
  );
}

export default App;
