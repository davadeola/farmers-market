import React from 'react';
import PropTypes from 'prop-types';
import Selection from './Selection';

const Produce =(props)=>{
  const crops = props.selection;
  return(
    <div>
      <h3>{props.month}</h3>
      <ul>
        {crops.map((crop, index)=>
          <Selection
            key={index}
            crop={crop}
          />
        )}
      </ul>    
    </div>
  );
};

export default Produce;

Produce.propTypes={
  month: PropTypes.string.isRequired,
  selection: PropTypes.array
};
