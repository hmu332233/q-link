import React from 'react';

type Props = {
  label: string;
  feedback?: string;
  children: JSX.Element;
};

function FormGroup({ children, label, feedback }: Props) {
  return (
    <div className="form-control">
      {label && (
        <label className="label">
          <span className="label-text text-lg font-semibold">{label}</span>
        </label>
      )}

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
