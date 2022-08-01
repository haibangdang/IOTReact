import React from 'react';
import HookMqtt from './components/Hook/'
import Dashboard from './components/Dashboard';

// Hook or Class
// import ClassMqtt from './components/Class/'
import './App.css';

function App() {
  return (
    <div className="App">
      <Dashboard />
      {/* <HookMqtt /> */}
      {/* Hook or Class */}
      {/* <ClassMqtt /> */}
    </div>
  );
}

export default App;
