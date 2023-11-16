import React, { useState } from 'react';

const Guess = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    console.log('Selected option:', selectedOption);

    // Submit the selected option to the server or perform other actions
  };

  const options = [
    { value: 'concierge', label: 'Concierge' },
    { value: 'housekeeping', label: 'Housekeeping' },
    { value: 'room_service', label: 'Room Service' },
    { value: 'maintenance', label: 'Maintenance' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div>
      <h2>Guest Services</h2>
      <ul>
        {options.map((option) => (
          <li key={option.value}>
            <button
              type="button"
              onClick={() => handleOptionClick(option.value)}
              className={selectedOption === option.value ? 'active' : ''}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleSubmit} disabled={!selectedOption}>
           Submit
      </button>
    </div>
  );
};

export default Guess;