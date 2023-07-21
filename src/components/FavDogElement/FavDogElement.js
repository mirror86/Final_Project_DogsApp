import React, {useContext} from 'react';
import {Col, Row} from "react-bootstrap";
import {DogDataContext} from "../../App";
const FavDogElement = ( {dog, key}) => {
    const { favDogs,setFavDogs  } = useContext(DogDataContext);
    const handleRemoveFromFavourites = (dog) => {
        console.log(dog)
        const updatedFavorites= favDogs.filter((favDog)=> ( dog.name !== favDog.name))
        setFavDogs(updatedFavorites)
    }

    const iconClick = () => {
        handleRemoveFromFavourites(dog)
        localStorage.removeItem('pathfinding.favourites')
        const saveData = localStorage.getItem('pathfinding.favourites');
        const dataToArray = JSON.parse(saveData) || [];

        const indexToRemove = dataToArray.findIndex((favDog) => favDog.key === key);

        if (indexToRemove !== -1) {
            dataToArray.splice(indexToRemove, 1);

            localStorage.setItem('pathfinding.favourites', JSON.stringify(dataToArray));

            // Wyświetl zaktualizowaną zawartość Local Storage
            console.log(dataToArray);
        } else {
            console.log("Nie znaleziono obiektu o podanym kluczu.");
        }
    }
    return (
        <>
             <Row key={key} className=" shadow justify-content-evenly gap-4 m-sm-2 align-items-center pt-2 pb-2">
                 <Col xs={12} sm={12} md={4} lg={3} xl={3} className="text-center">
                     <img src={dog.image_link} alt={dog.name} className=" w-100 rounded cover"/>
                     <h3 className="pt-3">{dog.name}</h3>
                 </Col>
                 <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                     <table className="table table-sm">
                     <thead>
                     <tr>
                         <th scope="col">Dog traits</th>
                         <th scope="col">Value</th>
                     </tr>
                     </thead>
                     <tbody>
                     <tr>
                         <td>Weight</td>
                         <td>from {dog.min_weight_male}lb to {dog.max_weight_male}lb</td>
                     </tr>
                     <tr>
                         <td>Height</td>
                         <td> from {dog.min_height_male}in to {dog.max_height_male}in</td>
                     </tr>
                     <tr>
                         <td>Energy</td>
                         <td>{dog.energy}</td>
                     </tr>
                     <tr>
                         <td>Loudness</td>
                         <td>{dog.barking}</td>
                     </tr>
                     <tr>
                         <td>Shedding</td>
                         <td>{dog.shedding}</td>
                     </tr>
                     <tr>
                         <td>Trainability</td>
                         <td>{dog.trainability}</td>
                     </tr>
                     <tr>
                         <td>Protectiveness</td>
                         <td>{dog.protectiveness}</td>
                     </tr>
                     <tr>
                         <td>Good with children</td>
                         <td>{dog.good_with_children}</td>
                     </tr>
                     <tr>
                         <td>Good with other dogs</td>
                         <td>{dog.good_with_other_dogs}</td>
                     </tr>
                     </tbody>
                 </table>
                 </Col>
                <Col xs={12} sm={12} md={1} lg={2} xl={2} className="text-center"><i className="fa-solid fa-trash-can" onClick={iconClick}/></Col>
            </Row>

        </>
    );

};

export default FavDogElement;