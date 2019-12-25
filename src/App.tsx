import React from 'react';
import LaunchList from './components/LaunchList';
import LaunchProfile from './components/LaunchProfile';
import './App.css';
import { DatePicker } from 'antd';
const App = () => {
  const [id, setId] = React.useState(42);
  const handleIdChange = React.useCallback(newId => {
    setId(newId);
  }, []);

  return (
    <div className="App">
      <LaunchList handleIdChange={handleIdChange} />
      <LaunchProfile id={id} />
      <DatePicker />
    </div>
  );
};

export default App;
