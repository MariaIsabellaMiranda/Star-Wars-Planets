import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

const TABLEHEADER = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter',
  'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population',
  'Films', 'Created', 'Edited', 'URL'];

function Table() {
  const { apiFiltered, handleChangeName, numberFiltred,
    handleFilters, handleChangeNumericValues, dropdow } = useContext(TableContext);

  return (
    <main>
      <form>
        <label htmlFor="name">
          <input data-testid="name-filter" id="name" onChange={ handleChangeName } />
        </label>
        <select
          data-testid="column-filter"
          name="colum"
          onChange={ handleChangeNumericValues }
        >
          {dropdow.map((sl) => <option key={ sl }>{sl}</option>)}
        </select>
        <select
          data-testid="comparison-filter"
          name="operator"
          onChange={ handleChangeNumericValues }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          type="number"
          value={ numberFiltred }
          data-testid="value-filter"
          name="number"
          onChange={ handleChangeNumericValues }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ handleFilters }
        >
          Filtrar

        </button>
      </form>
      <table>
        <thead>
          <tr>
            {TABLEHEADER.map((title) => <th key={ title }>{title}</th>)}
          </tr>
        </thead>
        <tbody>
          {apiFiltered.map((plan) => (
            <tr key={ plan.name }>
              <td>{plan.name}</td>
              <td>{plan.rotation_period}</td>
              <td>{plan.orbital_period}</td>
              <td>{plan.diameter}</td>
              <td>{plan.climate}</td>
              <td>{plan.gravity}</td>
              <td>{plan.terrain}</td>
              <td>{plan.surface_water}</td>
              <td>{plan.population}</td>
              <td>{plan.films}</td>
              <td>{plan.created}</td>
              <td>{plan.edited}</td>
              <td>{plan.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Table;
