import React, {Fragment} from 'react';
import { checkBudget } from '../helpers';
import PropType from 'prop-types';


const Budget = ({budget, remaining}) => {
    return (
        <Fragment>
            <div className='alert alert-primary'>
                Presupuesto: $ {budget}
            </div>
            <div className={checkBudget(budget, remaining)}>
                Restante: $ {remaining}
            </div>
        </Fragment>
    )
}

Budget.propType = {
    budget: PropType.string.isRequired,
    remaining: PropType.string.isRequired
}

export default Budget;