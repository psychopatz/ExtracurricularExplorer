import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const RadioComponent = ({ 
  name,
  value,
  options=[{ value: 'option1', label: 'Option 1' },],
  sx={border: '1px solid #ccc',},
  onChange 
  }) => {
  return (
    <RadioGroup
      row
      aria-label="radio-group"
      name= {name}
      value = {value}
      sx={sx}
      onChange={onChange}
    >
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<Radio />}
          label={option.label}
        />
      ))}
    </RadioGroup>
  );
};

export default RadioComponent;
