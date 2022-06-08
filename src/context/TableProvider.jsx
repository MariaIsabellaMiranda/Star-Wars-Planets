import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import TableContext from './TableContext';

const INITIAL_DROPDOW = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

function TableProvider({ children }) {
  const [returnApi, setReturnApi] = useState([]);
  const [planetsName, setPlanetsName] = useState('');
  const [apiFiltered, setApiFiltered] = useState([]);
  const [columFiltred, setColumFiltred] = useState('population');
  const [operatorFiltred, setOperatorFiltred] = useState('maior que');
  const [numberFiltred, setNumberFiltred] = useState(0);
  const [allFilters, setAllFilters] = useState([]);
  const [dropdow, setDropdow] = useState(INITIAL_DROPDOW);

  const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetch(ENDPOINT).then((response) => response.json());
      setReturnApi(results);
      setApiFiltered(results);
    };
    getPlanets();
  }, []);

  const handleChangeName = ({ target }) => {
    setPlanetsName(target.value);
  };

  const updateDropdow = () => {
    const dropdowFiltered = dropdow.filter((drop) => drop !== columFiltred);
    setDropdow(dropdowFiltered);
  };

  useEffect(() => {
    const filteredName = returnApi
      .filter((plan) => plan.name.toLowerCase().includes(planetsName));

    const resultFilter = allFilters.reduce((acumulator, filter) => acumulator
      .filter((planet) => {
        switch (filter.operatorFiltred) {
        case 'maior que':
          return planet[filter.columFiltred] > Number(filter.numberFiltred);
        case 'menor que':
          return planet[filter.columFiltred] < Number(filter.numberFiltred);
        case 'igual a':
          return Number(planet[filter.columFiltred]) === Number(filter.numberFiltred);
        default:
          return true;
        }
      }), filteredName);
    setApiFiltered(resultFilter);
  }, [planetsName, allFilters, returnApi]);

  const handleChangeNumericValues = ({ target }) => {
    const { name, value } = target;
    if (name === 'colum') {
      setColumFiltred(value);
    } else if (name === 'operator') {
      setOperatorFiltred(value);
    } else {
      setNumberFiltred(value);
    }
  };

  const handleFilters = () => {
    const filters = {
      columFiltred,
      operatorFiltred,
      numberFiltred,
    };
    setAllFilters([...allFilters, filters]);
    updateDropdow();
  };

  const deleteFilters = (filter) => {
    if (Array.isArray(filter)) {
      setAllFilters([]);
      setDropdow(INITIAL_DROPDOW);
    } else {
      const deleteFilter = allFilters
        .filter((filters) => filters.columFiltred !== filter);
      setAllFilters(deleteFilter);
      setDropdow([...dropdow, filter]);
    }
  };

  const props = {
    apiFiltered,
    numberFiltred,
    dropdow,
    allFilters,
    deleteFilters,
    handleChangeName,
    handleFilters,
    handleChangeNumericValues,
  };

  return (
    <TableContext.Provider value={ props }>
      { children }
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: propTypes.element.isRequired,
};

export default TableProvider;
