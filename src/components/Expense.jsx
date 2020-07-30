import React from 'react';
import PropType from 'prop-types';

const Expense = ({expense}) => (
    <li className='expenses'>
        <p>
            {expense.name}
            <span className='expense'>${expense.amount}</span>
        </p>
    </li>
)

Expense.propType = {
    expense: PropType.object.isRequired
}

export default Expense;