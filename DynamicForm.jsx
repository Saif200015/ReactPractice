import React, { useState } from 'react';

const DynamicForm = () => {
  const [fields, setFields] = useState([{ value: '' }]);

  const handleAddField = () => {
    setFields([...fields, { value: '' }]);
  };

  const handleChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].value = event.target.value; 
    setFields(newFields);
  };

  const handleRemoveField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleSubmit = () => {
    console.log('Form Values:', fields);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Dynamic Form</h1>
      <form>
        {fields.map((field, index) => (
          <div className="inputField flex items-center mb-2" key={index}>
            <input
              type="text"
              value={field.value}
              onChange={(e) => handleChange(index, e)}
              className="border border-gray-300 px-2 py-1 rounded w-64"
              placeholder="Enter value"
            />
            <button
              type="button"
              className="ml-3 text-red-500"
              onClick={() => handleRemoveField(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </form>
      <button
        type="button"
        onClick={handleAddField}
        className="bg-blue-500 text-white px-4 py-1 rounded mt-2 mr-2"
      >
        Add Field
      </button>
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-1 rounded mt-2"
      >
        Submit
      </button>
    </div>
  );
};

export default DynamicForm;
