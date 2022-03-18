import React from 'react';

import FormGroup from 'components/FormGroup';

type Props = {
  label?: string;
  feedback?: React.ReactNode;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
};

function DefaultInput({
  label,
  feedback,
  name,
  placeholder,
  type = 'text',
  required,
}: Props) {
  return (
    <FormGroup label={label} feedback={feedback}>
      <input
        className="input input-bordered w-full"
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </FormGroup>
  );
}

export default DefaultInput;
