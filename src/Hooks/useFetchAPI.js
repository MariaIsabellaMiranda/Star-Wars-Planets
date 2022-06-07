import { useEffect, useState } from 'react';

function useFetchAPI() {
  const [planetsList, setPlanetsList] = useState([]);
  const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
  useEffect(() => {
    const getPlanets = async () => {
      const data = await fetch(ENDPOINT).then((response) => response.json());
      console.log(data);
      setPlanetsList(data);
    };
    getPlanets();
  }, []);
  return planetsList;
}
export default useFetchAPI;
