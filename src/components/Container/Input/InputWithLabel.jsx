import { Fragment, forwardRef, useEffect } from "react";
import styles from "./InputWithLabel.module.css"

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
      <label className = {styles["lbl"]} htmlFor={id}>{children}</label>
      <input className={styles["input-text"]}
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
