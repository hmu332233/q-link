import React from 'react';

import FormGroup from 'components/FormGroup';

type Props = {
  label?: string;
  feedback?: string;
  name: string;
  placeholder: string;
  required?: boolean;
};

function DefaultInput({ label, feedback, name, placeholder, required }: Props) {
  return (
    <FormGroup label={label} feedback={feedback}>
      <input
        className="input input-bordered w-full"
        type="text"
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </FormGroup>
  );
}

export default DefaultInput;
