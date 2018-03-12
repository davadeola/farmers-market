import React from 'react';
import PropTypes from 'prop-types';

function MarketDay(props){
  return(
    <div>
      <h3><b>{props.day}</b></h3>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
    </div>
  );
}


MarketDay.propTypes={
  day:PropTypes.string.isRequired,
  location: PropTypes.string,
  hours:PropTypes.string,
  booth: PropTypes.string

};

export default MarketDay;
