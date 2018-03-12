import React from 'react';
import PropTypes from 'prop-types';

const Selection=(props)=>{
  return(
    <div>
      <style jsx>{`

        li{
          color: green;
          list-decoration: none;
        }
      `}</style>
      <li>{props.crop}</li>
    </div>
  );
};

export default Selection;
Selection.propTypes={
  crop:PropTypes.string.isRequired
};
