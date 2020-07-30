import React, { useState } from 'react';
import Ask from './components/Ask';
import Form from './components/Form';
import List from './components/List';

function App() {
  
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const addExpenses = expense => {
    setExpenses([...expenses, expense]);
  }

  return (
    <div className="container">
      <header>
        <h1>Gastos Semanales</h1>
        <div className="primary-content content">
          { !budget
            ? <Ask
                setBudget={setBudget}
                setRemaining={setRemaining}
              />
          : <div className="row">
              <div className="one-half column">
               <Form expenses={expenses} addExpenses={addExpenses}/> 
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
              </div>
            </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
