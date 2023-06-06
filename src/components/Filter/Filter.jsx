import PropTypes from 'prop-types';

export const Filter = ({ filter, changeFilter}) =>{
    return(
        <label>
            Find contacts by name  <input
                type="text"
                placeholder="Find contacts by name"
                value = {filter}
                onChange={changeFilter}
              ></input>
            </label>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
  };