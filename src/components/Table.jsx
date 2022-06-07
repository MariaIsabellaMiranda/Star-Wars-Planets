import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function Table() {
  const { nameFiltred, handleChange } = useContext(TableContext);
  // console.log(nameFiltred);
  const tableHeader = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter',
    'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population',
    'Films', 'Created', 'Edited', 'URL'];
  return (
    <main>
      <form>
        <label htmlFor="name">
          <input data-testid="name-filter" id="name" onChange={ handleChange } />
        </label>
      </form>
      <table>
        <thead>
          <tr>
            {tableHeader.map((title) => <th key={ title }>{title}</th>)}
          </tr>
        </thead>
        <tbody>
          {nameFiltred
        && nameFiltred.map((plan) => (
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
