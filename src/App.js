import React, { useState } from 'react';
import Ask from './components/Ask';

function App() {
  
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Gastos Semanales</h1>
        <div className="primary-content content">
          <Ask
            setBudget={setBudget}
            setRemaining={setRemaining}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
