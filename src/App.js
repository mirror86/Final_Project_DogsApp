import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import DogList from "./pages/DogList/DogList";
import DogsFinder from "./pages/DogFinder/DogsFinder";
import DogsAppHome from "./pages/DoggsAppHome/DogsAppHome";
import FavDogs from "./pages/FavDogs/FavDogs";
import Menu from "./components/Menu/Menu";
import {ThemeProvider} from "react-bootstrap";
import {Routes, Route, Link} from "react-router-dom";


function App() {
  return (
      <ThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
          minBreakpoint="xxs"
      >
          <Menu/>
          <Routes>
              <Route path="/" element={<DogsAppHome />} />
              <Route path="finder" element={<DogsFinder />} />
              <Route path ="list" element={<DogList/>}/>
              <Route path ="favourites" element={<FavDogs/>}/>
          </Routes>
      </ThemeProvider>
  );
}

export default App;
