import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import PicsGrid from './comps/PicsGrid';

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <PicsGrid />
    </div>
  );
}

export default App;
