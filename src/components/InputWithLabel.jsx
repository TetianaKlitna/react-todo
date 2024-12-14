import { Fragment, forwardRef, useEffect } from "react";

const InputWithLabel = forwardRef(function InputWithLabel(
  { id, name, type = "text", value, onInputChange, children, isFocused },
  ref
) {
  useEffect(() => {
    if (isFocused) {
      ref.current.focus();
    }
  }, [isFocused]);

  return (
    <Fragment>
      <label htmlFor={id}>{children}</label>
      <input
        ref={ref}
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onInputChange}
      ></input>
    </Fragment>
  );
});

export default InputWithLabel;
