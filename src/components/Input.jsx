import React, {useState} from 'react';

const Input = () => {
    const [value, setValue] = useState("");

  return (
    <div>
      <h3>{value}</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;