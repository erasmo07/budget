import React from 'react';
import PropType from 'prop-types';

const Error = ({message}) => (
    <p className='alert alert-danger error'>{message}</p>
);

Error.propType = {
    message: PropType.string.isRequired
}
 
export default Error;