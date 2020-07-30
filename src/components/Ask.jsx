import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropType from 'prop-types';


const Ask = ({setBudget, setRemaining}) => {

    const [amount, setamount ] = useState(0);
    const [error, setError] = useState('');

    const defineamoun = e => {
        setamount(parseInt(e.target.value, 0));
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (amount < 1 || isNaN(amount)) {
            setError(true);
            return;
        }

        setBudget(amount);
        setRemaining(amount);
    };

    return ( 
        <Fragment>
            <h2>¿ Cual es tu presupuesto ?</h2>

            {error ? <Error message='El Presupuesto no es valido' /> : null}

            <form
                onSubmit={handleSubmit} 
            >
                <input
                    type="number"
                    placeholder='$100'
                    className="u-full-width"
                    onChange={defineamoun}
                />
                <button
                    className='u-full-width'
                >Definir Presupuesto</button>
            </form>
        </Fragment>
     );
}

Ask.propType = {
    setBudget: PropType.func.isRequired,
    setRemaining: PropType.func.isRequired
}
 
export default Ask;