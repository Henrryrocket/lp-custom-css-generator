import React, { useState } from 'react';
import InputForm from './components/InputForm';
import OutputPreview from './components/OutputPreview';

function App() {
  const [styles, setStyles] = useState({
    name: '',
    primaryColor: '',
    secondaryColor: '',
    titlesFontWeight: '',
    titlesLetterSpacing: '',
    buttonBorderWidth: '',
  });

  const handleStyleChange = (newStyles: typeof styles) => {
    setStyles(newStyles);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">React Component Builder</h1>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <InputForm onStyleChange={handleStyleChange} />
        <OutputPreview styles={styles} />
      </div>
    </div>
  );
}

export default App;