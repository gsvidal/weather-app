import React, { useState } from 'react';
import 'material-icons/iconfont/material-icons.css';
import Error from './Error';
import PropTypes from 'prop-types';

const Form = ({search, setSearch, setQuery, setLoading}) => {

  const [ error, setError ] = useState(false);
  
  // Extract city and country
  const { city, country } = search;

  // Function that put elements in state
  const handleChange = event => {
    // Update state
     setSearch({
       ...search,
       [event.target.name]: event.target.value
     });
  }
  // When user submit the form
  const handleSubmit = event => {
    event.preventDefault();

    //Validate
    if(city.trim() ==="" || country.trim() === "" ) {
      setError(true);
      return;
    }

    setError(false);
    // Send to principal component (App)
    setQuery(true);

    // Starts Render the Spinner component
    setLoading(true);
  }

  return(
    <form 
      action=""
      onSubmit={handleSubmit}  
    >
      { error && 
      <Error 
        className="red darken-4 error" 
        message="All fields are required"
        component="Form"
      />}
      <div className="input-field col s12">
        <select 
            name="country"  
            id="country"
            value={country}
            onChange={handleChange}
          >
            <option value="">-- Select a country --</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
          <label htmlFor="country">Country</label>
      </div>
      <div className="input-field col s12">
        <input 
          autoComplete="nope"
          type="text"
          name="city"
          id="city"  
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">City:</label>
      </div>
      <div className="input-field col s12">
        <button
          className="btn-large waves-effect waves-light purple "
          type="submit"
          name="action"
        >Get Weather
        <i className="material-icons right">send</i>
        </button>
      </div>
    </form>
  );
}

Form.propTypes = {
  search: PropTypes.object.isRequired, 
  setSearch: PropTypes.func.isRequired, 
  setQuery: PropTypes.func.isRequired, 
  setLoading: PropTypes.func.isRequired
}

export default Form;