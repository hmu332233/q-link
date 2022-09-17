import React from 'react';

import Label from 'components/Label';

type Props = {
  label?: string;
  feedback?: React.ReactNode;
  children: React.ReactNode;
};

function FormGroup({ children, label, feedback }: Props) {
  return (
    <div className="form-control">
      {label && <Label>{label}</Label>}
      {children}
      {feedback && (
        <label className="label">
          <span className="label-text-alt">{feedback}</span>
        </label>
      )}
    </div>
  );
}

export default FormGroup;
