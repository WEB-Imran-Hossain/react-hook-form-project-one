import React from "react";

const FieldSet = ({ label, children }) => {
  return (
    <fieldset>
      {label && <legend>{label}</legend>}
      <div>{children}</div>
    </fieldset>
  );
};

export default FieldSet;
