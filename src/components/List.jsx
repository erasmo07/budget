import React from 'react';
import Expense from './Expense';
import PropType from 'prop-types';


const List = ({expenses}) => (
    <div className='make-expenses'>
        <h2>Listado</h2>
        {expenses.map(expense => (
            <Expense
                key={expense.id} expense={expense} 
            />
        ))}
    </div>
)

List.propType = {
    expenses: PropType.array.isRequired
}

export default List;