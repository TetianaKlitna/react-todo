import styles from "./TextareaWithLabel.module.css";
import PropTypes from "prop-types";
import clsx from "clsx";

function TextareaWithLabel({ id, name, value, children, onChange, rows, isReadOnly=false}) {
  return (
    <div className={styles["label-textarea"]}>
      <label htmlFor={id}>{children}</label>
      <textarea
        className={clsx(isReadOnly && styles["readonly"], "plain-border")}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        readOnly={isReadOnly}
      />
    </div>
  );
}

TextareaWithLabel.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func,
  rows: PropTypes.number,
  isReadOnly: PropTypes.bool,
}

export default TextareaWithLabel;
