import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import TableContext from './TableContext';

function TableProvider({ children }) {
  const [planetsList, setPlanetsList] = useState([]);
  const [name, setName] = useState('');
  const [nameFiltred, setNameFiltred] = useState([]);

  const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetch(ENDPOINT).then((response) => response.json());
      setPlanetsList(results);
      setNameFiltred(results);
    };
    getPlanets();
  }, []);

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  useEffect(() => {
    const filteredName = planetsList
      .filter((plan) => plan.name.toLowerCase().includes(name));
    setNameFiltred(filteredName);
  }, [name, planetsList]);

  return (
    <TableContext.Provider value={ { nameFiltred, handleChange } }>
      { children }
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: propTypes.element.isRequired,
};

export default TableProvider;
