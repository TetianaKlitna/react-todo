import styles from "./InputWithLabel.module.css";
import PropTypes from "prop-types";
import { forwardRef, useEffect } from "react";

import clsx from "clsx";

const InputWithLabel = forwardRef(function InputWithLabel(
  {
    id,
    name,
    type = "text",
    value,
    children,
    isFocused = false,
    placeholder,
    list,
    onChange,
    isReadOnly=false
  },
  ref
) {
  useEffect(() => {
    if (isFocused) {
      ref.current.focus();
    }
  }, [isFocused]);

  return (
    <div className={styles["label-input"]}>
      {children && <label className={styles["lbl"]} htmlFor={id}>{children} <span style={{ color: 'red' }}>*</span></label>}
      <input
        className={clsx(isReadOnly && styles["readonly"], "plain-border", styles["input-text"])}
        ref={ref}
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        list={list}
        onChange={onChange}
        readOnly={isReadOnly}
        required
      />
    </div>
  );
});

InputWithLabel.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf([
    "text",
    "submit",
    "search",
    "checkbox",
    "radio",
    "date",
  ]),
  value: PropTypes.string,
  children: PropTypes.node,
  isFocused: PropTypes.bool,
  placeholder: PropTypes.string,
  list: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputWithLabel;
