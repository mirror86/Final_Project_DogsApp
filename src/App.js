import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import DogList from "./pages/DogList/DogList";
import DogsFinder from "./pages/DogFinder/DogsFinder";
import DogsAppHome from "./pages/DoggsAppHome/DogsAppHome";
import FavDogs from "./pages/FavDogs/FavDogs";
import Menu from "./components/Menu/Menu";
import {ThemeProvider} from "react-bootstrap";
import {Routes, Route} from "react-router-dom";
import QuestionnairePage from "./components/QuestionnairePage/QuestionnairePage";
import React, {createContext, useState} from "react";
import {apiKey, apiUrl} from "./data";
import Container from "react-bootstrap/Container";
export const DogDataContext = createContext();
function App() {
    const [dogData, setDogData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [favDogs, setFavDogs] = useState([]);
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

    const handleAddToFavourites = (dog) => {
        const itsAlreadyFav = favDogs.some((favDog) => favDog === dog);
        if (itsAlreadyFav) {
            const updatedFavorites = favDogs.filter((favoriteId) => favoriteId !== dog);
            setFavDogs(updatedFavorites);
        } else {
            const newFavDogs = [...favDogs, dog];
            setFavDogs(newFavDogs);
        }
        console.log(favDogs)
    };



  return (
      <ThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
          minBreakpoint="xxs"
      >
              <Menu />
              <DogDataContext.Provider value={{ dogData, setDogData,handleAddToFavourites,favDogs, setFavDogs, loadData, isLoading }}>
                  <Routes>
                      <Route path="/" element={<DogsAppHome />} />
                      <Route path="finder/*" element={<DogsFinder loadData={loadData} />} />
                      <Route path="list" element={<DogList loadData={loadData} isLoading={isLoading} />} />
                      <Route path="favourites" element={<FavDogs />} />
                  </Routes>
              </DogDataContext.Provider>
      </ThemeProvider>
  );
}
export default App;

