import React from 'react';
import PropTypes from 'prop-types';

function Container({children}){
    return <main>{children}</main>;
}
Container.propTypes = {
    item: PropTypes.object.isRequired
  };
  
  export default Container;