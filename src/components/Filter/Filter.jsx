import React from 'react';
import PropTypes from 'prop-types';
import cl from './Filter.module.css';

function Filter({ value, onChangeFilter }) {
  return (
    <>
      <h2 className={cl.header} >Contacts</h2>
      <div className={cl.filterContainer}>
        <label htmlFor="" className={cl.label}>
          {' '} 
          Find contacts by name
          <input type="text" value={value} className={cl.input} onChange={onChangeFilter} />
        </label>
      </div>
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
