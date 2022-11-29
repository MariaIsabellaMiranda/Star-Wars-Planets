import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

const TABLEHEADER = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter',
  'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population',
  'Films', 'Created', 'Edited', 'URL'];

function Table() {
  const {
    apiFiltered,
  } = useContext(TableContext);

  return (
    <table>
      <thead>
        <tr>
          {TABLEHEADER.map((title) => <th key={ title }>{title}</th>)}
        </tr>
      </thead>
      <tbody>
        {apiFiltered.map((plan) => (
          <tr key={ plan.name }>
            <td data-testid="planet-name">{plan.name}</td>
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
  );
}

export default Table;
