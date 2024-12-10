import { Fragment, useEffect } from "react";

const InputWithLabel = ({
  inputRef,
  id,
  name,
  type = "text",
  value,
  isFocused,
  onInputChange,
  children,
}) => {

  useEffect(() => {
    if (isFocused && inputRef.current) {
        inputRef.current.focus();
    }
  }, [isFocused]);
    
  return (
    <Fragment>
      <label htmlFor={id}>{children}</label>
      <input
        ref = {inputRef}
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onInputChange}
      ></input>
    </Fragment>
  );
};

export default InputWithLabel;
