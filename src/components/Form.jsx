import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropType from 'prop-types';


const Form = ({addExpenses}) => {

    const [error, setError] = useState(false);
    const [expense, setExpense] = useState({
        name: '',
        amount: 0,
    });

    const handleSubmit = e => {
        e.preventDefault();
        if (expense.name.trim() === '' || expense.amount < 1 || isNaN(expense.amount)) {
            setError(true);
            return;
        }

        setError(false);

        expense.id = shortid.generate();
        addExpenses(expense);
        setExpense({name: '', amount: ''});
    };

    const handleChange = e => {
        setExpense({...expense, [e.target.name]: e.target.value});
    };
    
    return ( 
        <form onSubmit={handleSubmit}>
            <h2>Agrega tu gastos aqui</h2>
            {error 
                ? <Error message="Todo los campos son obligatorios" />
                : null
            }
            <label>Nombre de gasto</label>
            <input
                type="text"
                className='u-full-width'
                placeholder='Ej. Transporte'
                name='name'
                value={expense.name}
                onChange={handleChange}
            />

            <label>Cantidad</label>
            <input
                type="number"
                className='u-full-width'
                name='amount'
                value={expense.amount}
                onChange={handleChange}
            />

            <button>Guardar</button>
        </form>
     );
}

Form.propTypes = {
    addExpenses: PropType.func.isRequired
}
 
export default Form;