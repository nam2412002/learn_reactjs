import React from 'react';
import './App.css';
import Box from './components/Colobox';
import Couter from './components/Couter';
// import Album1 from './features/Albumfeatures';

// import TodoFeature from './features/Todo'; // Đảm bảo rằng đường dẫn này chính xác

function App() {
  return (
    <div className="App">
      {/* <TodoFeature /> */}
  {/* <Album1/> */}
  <Box/>
  <Couter/>
    </div>
  );
}

export default App;
