import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const InputFieldComponent = ({ name, type, label, sx , onChange }) => {
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const newValue = e;

    // Update error state based on whether the field is empty
    setError(newValue.target.value.trim() === '');

    // Call onChange only if the field is not empty kay basin naay space ray sulod
    if (newValue.target.value.trim()) {
      onChange(newValue);
    }
  };

  return (
    <TextField
      sx={sx}
      fullWidth
      name={name}
      type={type}
      label={label}
      onChange={handleChange}
      error={error}
      helperText={error ? 'This filed cannot be empty' : ''}
    />
  );
};

export default InputFieldComponent;
