import './scss/App.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import DogList from "./pages/DogList/DogList";
import DogsFinder from "./pages/DogFinder/DogsFinder";
import DogsAppHome from "./pages/DoggsAppHome/DogsAppHome";
import FavDogs from "./pages/FavDogs/FavDogs";
import Menu from "./components/Menu/Menu";
import {ThemeProvider} from "react-bootstrap";
import {Routes, Route} from "react-router-dom";
import React, {createContext, useState} from "react";
import {apiKey, apiUrl} from "./data";
export const DogDataContext = createContext(undefined);
function App() {
    const [dogData, setDogData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [favDogs, setFavDogs] = useState(localStorage.getItem('pathfinding.favourites') ? JSON.parse(localStorage.getItem('pathfinding.favourites')) : []);

    // Api fetch
    const loadData = async (offset) => {
        setIsLoading(true);
       await fetch(`${apiUrl}min_height=1&offset=${offset}`, {
            method: "GET",
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {setDogData(data); setIsLoading(false)})
            .catch(err => {console.error(err); setIsLoading(false)})
    }
// adding selected dog to favourites and save to local storage
    const handleAddToFavourites = (dog) => {
        const itsAlreadyFav = favDogs.some((favDog) => favDog === dog);
        if (itsAlreadyFav) {
            const updatedFavorites = favDogs.filter((favoriteId) => favoriteId !== dog);
            setFavDogs(updatedFavorites);
            localStorage.setItem('pathfinding.favourites', JSON.stringify(updatedFavorites));
            // const saveData = localStorage.getItem('pathfinding.favourites');
            // const dataToArray = JSON.parse(saveData) || [];
            // console.log(dataToArray)
        } else {
            const newFavDogs = [...favDogs, dog];
            setFavDogs(newFavDogs);
            localStorage.setItem('pathfinding.favourites', JSON.stringify(newFavDogs));
            // const saveData = localStorage.getItem('pathfinding.favourites');
            // const dataToArray = JSON.parse(saveData) || [];
            // console.log(dataToArray)
        }
        console.log(favDogs)
    };

  return (
      <ThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
          minBreakpoint="xxs"
      >
              <Menu />
              <DogDataContext.Provider value={{ dogData, setDogData,handleAddToFavourites,favDogs, setFavDogs, loadData, isLoading, setIsLoading }}>
                  <Routes>
                      <Route path="/" element={<DogsAppHome />} />
                      <Route path="finder" element={<DogsFinder/>} />
                      <Route path="list/*" element={<DogList/>} />
                      <Route path="favourites" element={<FavDogs />} />
                  </Routes>
              </DogDataContext.Provider>
      </ThemeProvider>
  );
}
export default App;

