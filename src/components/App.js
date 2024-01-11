import React, { useState } from 'react';
import Header from './Header';
import ExpensePlanner from './ExpensePlanner';
import ExpenseTracker from './ExpenseTracker';
import Footer from './Footer';

const App = () => {
  // Define state for planned and tracked expenses
  const [plannedExpenses, setPlannedExpenses] = useState([]);
  const [trackedExpenses, setTrackedExpenses] = useState([]);

  return (
    <div>
      <Header />
      <ExpensePlanner
        plannedExpenses={plannedExpenses}
        setPlannedExpenses={setPlannedExpenses}
      />
      <ExpenseTracker
        trackedExpenses={trackedExpenses}
        setTrackedExpenses={setTrackedExpenses}
      />
      <Footer />
    </div>
  );
}

export default App;


