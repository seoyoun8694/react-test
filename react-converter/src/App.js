import { useState } from 'react';
import './App.css';

const MinutesToHours = () => {
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const handleMinutesChange = (e) => {
    const minutesValue = parseInt(e.target.value, 10);
    setMinutes(minutesValue);
    setHours(minutesValue / 60);
  };

  const handleReset = () => {
    setMinutes(0);
    setHours(0);
  };

  return (
    <div>
      <h3>Minutes To Hours</h3>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          type="number"
          id="minutes"
          placeholder="Minutes"
          value={minutes}
          onChange={handleMinutesChange}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          type="number"
          id="hours"
          placeholder="Hours"
          value={hours}
          disabled={true}
        />
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <MinutesToHours />
    </div>
  );
}

export default App;