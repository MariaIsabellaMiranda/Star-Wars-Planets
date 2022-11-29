import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function FilterBar() {
  const {
    apiFiltered,
    handleChangeName,
    numberFiltred,
    handleFilters,
    handleChangeNumericValues,
    dropdow,
    allFilters,
    deleteFilters,
    INITIAL_DROPDOW,
    handleOrderChange,
    handleOrder,
  } = useContext(TableContext);

  return (
    <div>
      <form className="form-container">
        <label htmlFor="name">
          <input data-testid="name-filter" id="name" onChange={ handleChangeName } />
        </label>
        <div>
          <p>Coluna</p>
          <select
            data-testid="column-filter"
            name="colum"
            onChange={ handleChangeNumericValues }
          >
            {dropdow.map((sl) => <option key={ sl }>{sl}</option>)}
          </select>
        </div>
        <div>
          <p>Operador</p>
          <select
            data-testid="comparison-filter"
            name="operator"
            onChange={ handleChangeNumericValues }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </div>
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
        <div>
          <p>Ordenar</p>
          <select
            id="order"
            data-testid="column-sort"
            name="column"
            onClick={ handleOrderChange }
          >
            {INITIAL_DROPDOW.map((drop) => <option key={ drop }>{drop}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="asc">
            Ascendente
            <input
              id="asc"
              value="ASC"
              type="radio"
              name="sort"
              data-testid="column-sort-input-asc"
              onClick={ handleOrderChange }
            />
          </label>
          <label htmlFor="desc">
            Descendente
            <input
              id="desc"
              value="DESC"
              type="radio"
              name="sort"
              data-testid="column-sort-input-desc"
              onClick={ handleOrderChange }
            />
          </label>
        </div>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => handleOrder(apiFiltered) }
        >
          Ordenar

        </button>
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ () => deleteFilters(allFilters) }
        >
          Remover Filtros

        </button>
      </form>
      {allFilters.map((filter, index) => (
        <div key={ index } data-testid="filter">
          <p>
            {`${filter.columFiltred}${filter.operatorFiltred}${filter.numberFiltred}`}
          </p>
          <button
            type="button"
            onClick={ () => deleteFilters(filter.columFiltred) }
          >
            Excluir

          </button>
        </div>
      ))}
    </div>
  );
}

export default FilterBar;
