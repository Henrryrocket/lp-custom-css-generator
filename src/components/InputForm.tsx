import React, { useState } from 'react';

interface InputFormProps {
  onStyleChange: (styles: any) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onStyleChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    primaryColor: '#1e90ff',
    secondaryColor: '#ffffff',
    titlesFontWeight: '300',
    titlesLetterSpacing: '3px',
    buttonBorderWidth: '1px',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStyleChange(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Web Builder Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="primaryColor" className="block text-sm font-medium text-gray-700">
            Primary Color
          </label>
          <input
            type="color"
            id="primaryColor"
            name="primaryColor"
            value={formData.primaryColor}
            onChange={handleChange}
            className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="secondaryColor" className="block text-sm font-medium text-gray-700">
            Secondary Color
          </label>
          <input
            type="color"
            id="secondaryColor"
            name="secondaryColor"
            value={formData.secondaryColor}
            onChange={handleChange}
            className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="titlesFontWeight" className="block text-sm font-medium text-gray-700">
            Titles Font Weight
          </label>
          <input
            type="number"
            id="titlesFontWeight"
            name="titlesFontWeight"
            value={formData.titlesFontWeight}
            onChange={handleChange}
            min="100"
            max="900"
            step="100"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="titlesLetterSpacing" className="block text-sm font-medium text-gray-700">
            Titles Letter Spacing
          </label>
          <input
            type="text"
            id="titlesLetterSpacing"
            name="titlesLetterSpacing"
            value={formData.titlesLetterSpacing}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="buttonBorderWidth" className="block text-sm font-medium text-gray-700">
            Button Border Width
          </label>
          <input
            type="text"
            id="buttonBorderWidth"
            name="buttonBorderWidth"
            value={formData.buttonBorderWidth}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Generate Styles
      </button>
    </form>
  );
};

export default InputForm;